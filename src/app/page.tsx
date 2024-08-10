import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { Bilbo_Swash_Caps } from "next/font/google";
import { cn } from "@/lib/utils";
import { SocialLink } from "@/components/SocialLink";

const bilbo = Bilbo_Swash_Caps({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center w-screen min-h-screen bg-[hsl(31.03,36.71%,69.02%)]">
      <div className="grid grid-cols-2 w-full max-w-6xl relative">
        <div className="w-full flex items-center justify-center h-full relative col-span-2 md:col-span-1">
          <Image
            src={"/technoligest.github.io/portrait.webp"}
            alt={"Portrait of Yaser"}
            className="w-full"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="absolute md:static md:bg-transparent bg-[hsl(31.03,36.71%,69.02%)]/90 p-10 md:p-0 w-full flex items-center flex-col justify-center bottom-10  text-[hsl(219,37%,19%)]">
          <h1
            className={cn(
              "text-5xl md:text-7xl font-semibold",
              bilbo.className
            )}
          >{`Hi I'm Yaser`}</h1>
          <div className="flex gap-5 mt-5">
            <SocialLink href="https://facebook.com/yaseralkayale">
              <Facebook className="size-10" />
              {/* <span>Facecook</span> */}
            </SocialLink>
            <SocialLink href="https://github.com/technoligest">
              <Github className="size-10" />
              {/* <span>Github</span> */}
            </SocialLink>
            <SocialLink href="https://Linkedin.com/in/yaseralkayale">
              <Linkedin className="size-10" />
              {/* <span>Linkedin</span> */}
            </SocialLink>
            <SocialLink href="https://instagram.com/yaseralkayale">
              <Instagram className="size-10" />
              {/* <span>Instagram</span> */}
            </SocialLink>
          </div>
        </div>
      </div>
    </main>
  );
}
