"use client";

import { useFormState } from "react-dom";

import styles from "./LoginForm.module.css";
import { loginUser } from "@/lib/actions";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

function LoginForm() {
  const [state, formData] = useFormState(loginUser, undefined);

  return (
    <div className={styles.container}>
      <Form title="Login information" action={formData} className={styles.form}>
        <Input
          type="text"
          name="username"
          placeholder="Enter your username here..."
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

        <Button primary large borderRadius>
          Login with credentials
        </Button>

        <span className={styles.message}>{state?.error && state?.error}</span>
      </Form>
    </div>
  );
}

export default LoginForm;
