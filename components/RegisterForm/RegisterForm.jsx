"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

import styles from "./RegisterForm.module.css";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { registerUser } from "@/lib/actions";

function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [router, state?.success]);

  return (
    <>
      <h1>Register</h1>

      <Form
        title="Register information"
        action={formAction}
        className={styles.form}
      >
        <Input
          type="text"
          name="username"
          placeholder="Enter your username here..."
          primary
          large
          borderRadius
        />
        <Input
          type="text"
          name="email"
          placeholder="Enter your email here..."
          primary
          large
          borderRadius
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password here..."
          primary
          large
          borderRadius
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password here..."
          primary
          large
          borderRadius
        />
        <Button primary large borderRadius>
          Register
        </Button>

        <span className={styles.message}>{state?.error && state.error}</span>
      </Form>
    </>
  );
}

export default RegisterForm;
