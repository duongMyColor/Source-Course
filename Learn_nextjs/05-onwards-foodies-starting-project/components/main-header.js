import Link from "next/link";
import logo from "@/assets/logo.png";
export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logo.src} />
      </Link>
    </header>
  );
}
