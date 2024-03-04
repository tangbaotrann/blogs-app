import styles from "./Login.module.css";
import Button from "@/components/Button/Button";
import Form from "@/components/Form/Form";
import LoginForm from "@/components/LoginForm/LoginForm";
import { loginUserWithGithub } from "@/lib/actions";

function LoginPage() {
  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <Form title="Login information" action={loginUserWithGithub}>
        <Button primary large borderRadius>
          Login with Github
        </Button>
      </Form>

      <LoginForm />
    </div>
  );
}

export default LoginPage;
