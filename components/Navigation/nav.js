import styles from "./nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Nav = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData));
  }, []);
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <Link href="/">Mewzic</Link>
      </div>
      <div className={styles.search}>
        <input placeholder="Search mewzic" />
      </div>
      <div className={styles.profile}>
        {user && (
          <div onClick={() => router.push(`/${user.username}`)}>
            <i className="far fa-user-circle"></i>
          </div>
        )}
        {!user && (
          <button
            onClick={() => router.push("/login")}
            className={styles.button}
          >
            Signin
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
