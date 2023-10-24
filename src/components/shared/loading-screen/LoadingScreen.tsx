import { PuffLoader } from "react-spinners";

import styles from "./LoadingScreen.module.scss";

export default function LoadingScreen() {
  return (
    <div className={styles.root}>
      <PuffLoader color="blue" size={80} />
    </div>
  );
}