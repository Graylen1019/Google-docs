"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
const params = useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_qI5pf6rw0YDi4qDiY5Ttkmg1_fODj-HfFo8yU8-NPFGgli0tXZ8clmCbt3wHx-CU"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}