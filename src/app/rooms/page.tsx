import Header from "@/components/rooms/Header";
import RoomsGrid from "@/components/rooms/RoomsGrid";
import RoomsGridSkeleton from "@/components/rooms/RoomsGridSkeleton";
import { Suspense } from "react";

export default function Rooms() {
  return (
    <>
      <Header />
      <Suspense fallback={<RoomsGridSkeleton />}>
        <RoomsGrid />
      </Suspense>
    </>
  );
}
