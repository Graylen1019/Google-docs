import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";

export const removeById = mutation({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("You Cheeky thing! You're Not Authorized!");
    }

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError(
        "What do you mean? This Document Does Not Exist, Silly!"
      );
    }

    const isOwner = document.ownerId === user.subject;

    if (!isOwner) {
      throw new ConvexError("Whoa! Thats not yours, Hun");
    }

    return await ctx.db.delete(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    return await ctx.db.insert("documents", {
      title: args.title ?? "untitled document",
      ownerId: user.subject,
      initialContent: args.initialContent,
    });
  },
});

export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
    search: v.optional(v.string()),
  },
  handler: async (ctx, { search, paginationOpts }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    const organizationId = (user.orgazation_id ?? undefined) as
      | string
      | undefined;

    //search with org
    if (search && organizationId) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("organizationId", organizationId!)
        )
        .paginate(paginationOpts);
    }

    //search with no org
    if (search) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject)
        )
        .paginate(paginationOpts);
    }

    // return with org
    if (organizationId) {
      return await ctx.db
        .query("documents")
        .withIndex("by_organization_id", (q) =>
          q.eq("organizationId", organizationId)
        )
        .paginate(paginationOpts);
    }

    //return with no org
    return await ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
      .paginate(paginationOpts);
  },
});

export const updateById = mutation({
  args: { id: v.id("documents"), title: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("You Cheeky thing! You're Not Authorized!");
    }

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError(
        "What do you mean? This Document Does Not Exist, Silly!"
      );
    }

    const isOwner = document.ownerId === user.subject;

    if (!isOwner) {
      throw new ConvexError("Whoa! Thats not yours, Hun");
    }

    return await ctx.db.patch(args.id, { title: args.title });
  },
});
