import Link from "next/link";

interface HeaderLinkProps {
  text: string,
  path: string,
}

export default function HeaderLink({ text, path = '/' }: HeaderLinkProps) {
  return (
    <Link href={path} passHref>
      <button className={` text-2xl text-blue-800 py-2 px-4`}>
        {text}
      </button>
    </Link>
  );
}