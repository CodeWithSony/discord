import React from "react";
import Image from "next/image";

import styles from "./Navbar.module.css";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <navbar className={styles.mainNav}>
        <div className={styles.main}>
          <div className={styles.sameContainer}>
            <Image src={logo} height={50} width={50} />
            <Link className={styles.Link} href="/">DISCORD</Link>
          </div>

          <div className="subContainer2 sameContainer">
            <Link className={styles.Link} href="/">Download</Link>
            <Link  className={styles.Link} href="/">Nitro</Link>
            <Link className={styles.Link} href="/">Discover</Link>
            <Link className={styles.Link} href="/">Safety</Link>
            <Link className={styles.Link} href="/">Support</Link>
            <Link  className={styles.Link} href="/">Blog</Link>
            <Link className={styles.Link} href="/">Careers</Link>
          </div>

          <div className={styles.subContainer3}>
          <Link className={styles.buttonWhite} href="/">  Open Discord</Link>
          </div>

        </div>
      </navbar>
    </>
  )
}

export default Navbar;
