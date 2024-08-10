import Link from "next/link";

export const SocialLink: React.FC<
  React.PropsWithChildren & { href: string }
> = (props) => {
  return (
    <Link
      href={props.href}
      className="rounded-lg hover:outline-[hsl(219,37%,19%)] md:hover:outline p-3 flex flex-col items-center font-semibold"
      target="_blank"
    >
      {props.children}
    </Link>
  );
};
