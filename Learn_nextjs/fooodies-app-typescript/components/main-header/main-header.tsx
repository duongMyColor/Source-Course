"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import classess from "@/app/meals/page.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function MainHeader() {
  const path = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("dataa useEffect:", session?.user?.email);
  }, [session]);

  console.log({ session, status });

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {session && (
        <>
          <MainHeaderBackground />
          <header className={classes.header}>
            <Link className={classes.logo} href="/">
              <Image src={logo} alt="foodie logo" />
              NextLevel Food
            </Link>

            <nav className={classes.nav}>
              <ul>
                <li>
                  <NavLink href="/meals">Browser Meals</NavLink>
                </li>
                <li>
                  <NavLink href="/community"> Foodies community</NavLink>
                </li>
                <li>{session?.user?.email}</li>
                <div className={classess.cta} onClick={handleLogout}>
                  Logout
                </div>
              </ul>
            </nav>
          </header>
        </>
      )}
    </>
  );
}
