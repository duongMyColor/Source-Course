"use client";

import { useState } from "react";
import classes from "./auth-form.module.css";
import { createUser } from "@/lib/action";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const onSubmitHandle = async (format: FormData) => {
    if (isLogin) {
      try {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (result?.error) {
          console.log("error:", result.error);
          return;
        }
        console.log({ result });
        
        router.push("/meals");
      } catch (error) {
        console.log({ error });
      }
    } else {
      await createUser(format);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form action={onSubmitHandle}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
