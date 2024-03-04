import styles from "./register.module.css";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
