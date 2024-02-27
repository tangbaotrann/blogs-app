import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <span className={styles.name}>@_tbtcodeofficial</span>
        <i className={styles.reserved}>baotrann © All rights reserved.</i>
      </div>
    </div>
  );
}

export default Footer;
