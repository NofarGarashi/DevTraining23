import React from "react";
import styles from "./day1b.module.css";
import Image from "next/image";

export default function Day1b() {
  return (
    <div className={styles.container}>
      <h1>Day 1 Bonus Challenge</h1>
      <div className={styles.nav}>
        <Image src="/donut.png" height={40} width={40} alt="donut logo" className={styles.donutImage} />
        <div className={styles.ham}>|||</div>
        <div className={styles.navItems}>
          <a className={styles.item}>Home</a>
          <a className={styles.item}>About</a>
          <a className={styles.item}>Contact Us</a>
        </div>
      </div>
      <div className={styles.heroSection}>
        <h3>From our kitchen, <br/> to your tummy</h3>
        <div>
          <Image src="/donuts.png" height={300} width={300} alt="donut logo" className={styles.donutImage} />
        </div>
        
    </div>
    <div className={styles.gallery}>
      <h3>Our Gallery</h3>
        <div className={styles.galleryItems}>
          <Image src="/d1.jpg" height={200} width={150} alt="donut logo" className={styles.donutImage} />
          <Image src="/d2.jpg" height={200} width={150} alt="donut logo" className={styles.donutImage} />
          <Image src="/d3.jpg" height={200} width={150} alt="donut logo" className={styles.donutImage} />
          </div>
    </div>
  </div>
  );
}
