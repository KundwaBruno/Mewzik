import styles from "../styles/profile.module.css";
import Head from "next/dist/shared/lib/head";
import Layout from "../components/layout/layout";
import Nav from "../components/Navigation/nav";
import users from "../utils/users";
import Songs from "../utils/music";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [userData, setUser] = useState();
  const [credentials, setCredentials] = useState();
  const [song, setSong] = useState();
  const logOut = () => {
    localStorage.removeItem("user");
    router.push("/");
  };
  const saveSong = () => {
    const data = Songs;
    localStorage.setItem("songs", JSON.stringify(data));
    alert("Uploaded");
  };
  const saveProfile = () => {
    users.forEach((user, index) => {
      if (credentials.username === user.username) {
        user.username = credentials.username;
        user.password = credentials.password;
        user.bio = credentials.bio;
        user.role = userData.role;
        localStorage.setItem("user", JSON.stringify(user));
        alert("saved");
      }
    });
  };
  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData));
    setCredentials(JSON.parse(userData));
  }, []);
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <div className={styles.profileContainer}>
        <div className={styles.updateProfile}>
          <h2>Profile</h2>
          <div>
            Username
            <input
              className={styles.input}
              name="username"
              value={credentials?.username}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div>
            Password
            <input
              className={styles.input}
              name="password"
              value={credentials?.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div>
            Bio
            <input
              className={styles.input}
              name="bio"
              value={credentials?.bio}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div>
            <button className={styles.button} onClick={() => saveProfile()}>
              Save
            </button>
          </div>
          <div>
            <button className={styles.button} onClick={() => logOut()}>
              Logout
            </button>
          </div>
        </div>
        {userData?.role === "creator" && (
          <div className={styles.postSong}>
            <h2>Upload song</h2>
            <div>
              Artist
              <input
                className={styles.input}
                placeholder="Song artist"
                name="artist"
                onChange={(e) =>
                  setSong({
                    ...song,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div>
              Title
              <input
                className={styles.input}
                placeholder="Song title"
                name="title"
                onChange={(e) =>
                  setSong({
                    ...song,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div>
              Album
              <input
                className={styles.input}
                placeholder="album name"
                name="album"
                onChange={(e) =>
                  setSong({
                    ...song,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div>
              Album
              <textarea
                cols="4"
                rows="10"
                style={{ borderRadius: "5px" }}
                className={styles.input}
                placeholder="Song lyrics"
                name="lyrics"
                onChange={(e) =>
                  setSong({
                    ...song,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <button onClick={() => saveSong()} className={styles.button}>
                Upload <i className="fas fa-upload" />
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
