import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs"
import { SearchInput } from "./search-input";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full mx-auto pl-6 pr-6">
      <div className="flex gap-3 items-center shrink-0">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
        </Link>
        <h3 className="text-xl">SolidDocs</h3>
      </div>
      <SearchInput />
      <UserButton />
    </nav>
  );
};
