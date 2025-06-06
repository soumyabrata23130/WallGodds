import React from "react";
import styles from "./Error404.module.css";
import arrow from "./Error404Assests/Arrow.svg";
import circle from "./Error404Assests/Circle.svg";
import triangle from "./Error404Assests/Triangle.svg";
import square from "./Error404Assests/Square.svg";

const Error404 = () => {
  return (
    <div className={styles.big_container}>
      <div className={styles.container}>
        <div className={styles.container_top}>
          <div className={styles.elements}>
            <img src={circle} alt="circle" />
            <img src={triangle} alt="triangle" />
            <img src={square} alt="square" />
          </div>
        </div>
        <div className={styles.messageBox}>


          <div className={styles.container_bottom}>
            <h1 className={styles.errorCode}>
              <span>404</span>: Is that heaven?
            </h1>
          </div>
          <p className={styles.errorMessage}>
            Sorry, you took a wrong turn at the Pearly Gates. Looks like you're stuck with us mere mortals. Try finding the right path before the angels start gossiping.
          </p>


          <div className={styles.homeThisWay}>
            <div className={styles.homeMessage}>
              <h1>
                Home this <span>way</span>
              </h1>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

      </div>
      <div className={styles.pageNotFoundBox}>
        <button className={styles.pageNotFound}>Page Not Found</button>
      </div>
    </div>
  );
};

export default Error404;
