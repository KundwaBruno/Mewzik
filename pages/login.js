import styles from "../styles/login.module.css";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import users from "../utils/users";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState();
  const Login = () => {
    users.forEach((user) => {
      if (credentials.username === user.username) {
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      }
    });
  };
  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.form}>
          <h2>Login</h2>
          <input
            name="username"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Password"
          />
          <button onClick={() => Login()}>Login</button>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
