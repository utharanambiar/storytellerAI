import Image from "next/image";
import magic from "../images/magic2.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StoryWriter from "@/components/StoryWriter";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col space-y-5 justify-center items-center order-1 lg:-order-1 pb-10">
          <Image src={magic} alt="magic image" height={250} />
          <Button asChild className="px-20 bg-purple-700 p-10 text-xl">
            <Link href="/stories">Explore story library</Link>
          </Button>
        </div>
        <StoryWriter />
      </section>
    </main>
  );
}
