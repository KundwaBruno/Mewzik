import { useEffect, useState } from "react";
import data from "../../utils/music";
import Music from "../Music/music";
import Player from "../Player/player";
import styles from "./index.module.css";

const getPlaying = (setPlaying) => {
  data.forEach((m) => {
    if (m.playing) {
      setPlaying(m);
    }
  });
};

const BodySection = () => {
  const [playing, setPlaying] = useState();
  useEffect(() => {
    getPlaying(setPlaying);
  }, [playing]);
  return (
    <div className={styles.bodySectionContainer}>
      <Music setPlaying={setPlaying} />
      <Player music={playing} />
    </div>
  );
};
export default BodySection;
