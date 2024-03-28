import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.leftContainer}></div>
      <div className={styles.MidContainer}>
        <div>
          <h1 className={styles.place}>IMAGINE A PLACE...</h1>
        </div>
        <div>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
      </div>
      <div className={styles.RightContainer}></div>
    </section>
  );
};

export default Hero;
