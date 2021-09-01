import { useEffect, useState } from "react";
import styles from "./music.module.css";
import music from "../../utils/music";

const categories = [
  {
    name: "Top",
  },
  {
    name: "Artist",
  },
  {
    name: "Most watched",
  },
  {
    name: "Slow",
  },
];

const Music = ({ setPlaying }) => {
  const [active, setActive] = useState("Top");
  const [songList, setSongList] = useState();
  useEffect(() => {
    const list = localStorage.getItem("songs");
    if (!list) {
      setSongList(music);
    } else {
      setSongList(JSON.parse(list));
    }
  }, []);
  const changePlay = (title) => {
    music.forEach((m) => {
      m.playing = false;
    });
    music.forEach((m) => {
      if (m.title === title) {
        m.playing = true;
        setPlaying(m);
      }
    });
  };
  return (
    <div className={styles.musicContainer}>
      <div className={styles.categories}>
        <ul>
          {categories.map((cat, index) => (
            <li
              key={index}
              onClick={() => setActive(cat.name)}
              className={`${styles.catego} ${
                active === cat.name ? styles.active : ""
              }`}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.musicListContainer}>
        {songList?.map((music, index) => (
          <div
            onClick={() => changePlay(music.title)}
            key={index}
            className={styles.musicThumbnail}
          >
            <div className={styles.musicArt}>
              <div>
                <i className="fas fa-music" />
              </div>
            </div>
            <div className={styles.musicDescription}>
              <div className={styles.artist}>{music.artist}</div>
              <div className={styles.title}>{music.title}</div>
              <div className={styles.album}>{`Album ~ ${music.album}`}</div>
            </div>
            {music.playing && (
              <div className={styles.playingIcon}>
                <i className="fas fa-volume-up" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Music;
