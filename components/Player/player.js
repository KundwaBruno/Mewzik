import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import styles from "../Player/player.module.css";

const Player = ({ music }) => {
  const [played, setPlayed] = useState();

  return (
    <div className={styles.parent}>
      <div className={styles.lyricsHeader}>
        <div>Lyrics</div>
      </div>
      <div className={styles.lyrics}>
        <div className={styles.content}>
          <div>{ReactHtmlParser(music?.lyrics)}</div>
        </div>
      </div>
      <div className={styles.playerContainer}>
        <div className={styles.thumbnail}>
          <div>
            <i className="fas fa-music" />
          </div>
        </div>
        <div className={styles.audio}>
          <div className={styles.audioName}>
            <span>{music?.title}</span>
            <span>{music?.artist}</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.audioControls}>
            <i className="fas fa-step-backward" />
            <i
              onClick={() => setPlayed(!played)}
              className={`fas fa-${played ? "pause" : "play"}`}
            />
            <i className="fas fa-step-forward" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
