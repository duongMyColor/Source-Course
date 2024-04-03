import { usePathname } from "next/navigation";
import classes from "./main-header.module.css";
import Link from "next/link";

interface NavLinkProps{
    href: string,
    children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();
  return (
    <>
      <Link
        href={href}
        className={path.startsWith(href) ? classes.active : ""}
      >
        {children}
      </Link>
    </>
  );
}
