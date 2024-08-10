import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Bilbo_Swash_Caps } from "next/font/google";
import { cn } from "@/lib/utils";

const bilbo = Bilbo_Swash_Caps({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center w-screen  min-h-screen">
      <div className="grid grid-cols-2 w-full max-w-6xl relative">
        <div className="w-full flex items-center justify-center h-full relative col-span-2 md:col-span-1">
          <Image
            src={"/portrait.webp"}
            alt={"Portrait of Yaser"}
            className="h-full"
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="absolute md:static md:bg-none bg-primary/90 p-10 md:p-0 w-full flex items-center flex-col justify-center bottom-10">
          <h1
            className={cn(
              "text-5xl md:text-7xl text-accent font-semibold",
              bilbo.className
            )}
          >{`Hi I'm Yaser`}</h1>
          <div className="flex gap-5 mt-5">
            <SocialLink href="https://facebook.com/yaseralkayale">
              <Facebook className="size-12 text-accent" />
              <span>Facecook</span>
            </SocialLink>
            <SocialLink href="https://github.com/technoligest">
              <Github className="size-12 text-accent" />
              <span>Github</span>
            </SocialLink>
            <SocialLink href="https://Linkedin.com/in/yaseralkayale">
              <Linkedin className="size-12 text-accent" />
              <span>Linkedin</span>
            </SocialLink>
            <SocialLink href="https://instagram.com/yaseralkayale">
              <Instagram className="size-12 text-accent" />
              <span>Instagram</span>
            </SocialLink>
          </div>
        </div>
      </div>
    </main>
  );
}

const SocialLink: React.FC<React.PropsWithChildren & { href: string }> = (
  props
) => {
  return (
    <Link
      href={props.href}
      className="rounded-lg hover:outline-accent hover:outline p-3 flex flex-col items-center text-accent font-semibold"
      target="_blank"
    >
      {props.children}
    </Link>
  );
};
