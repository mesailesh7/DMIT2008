import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

// I'm going to import my component
// as a note here we're going to use the @/
// which looks at the jsconfig to say that root
// folder is @/ (in components-intro director)

import Title from '@/components/Title'
import ConceptList from "@/components/ConceptList";
import ConceptItem from "@/components/ConceptItem";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Inside of the main we're going use it */}
        <Title text={"Look a component!"}/>
        {/* Our component we'll be using */}
        <ConceptList>
          <ConceptItem idea={"Props and the children prop"}/>
          <ConceptItem idea={"Importing components"}/>
          <ConceptItem idea={"Using Lists"}/>
        </ConceptList>
      </main>

    </div>
  );
}
