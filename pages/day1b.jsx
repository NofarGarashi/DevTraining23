import React from 'react';
import Image from 'next/image';
import styles from './day1b.module.css';

export default function Day1b() {
  return (
    <div className={styles.container}>
      <h1>Day 1 Bonus Challenge</h1>
      <div className={styles.nav}>
        <Image
          src="/donut.png"
          height={40}
          width={40}
          alt="donut logo"
          className={styles.donutImage}
        />
        <div className={styles.ham}>|||</div>
        <div className={styles.navItems}>
          <h4 className={styles.item} href="/Home">Home</h4>
          <h4 className={styles.item} href="/About">About</h4>
          <h4 className={styles.item} href="/Contactus">Contact Us</h4>
        </div>
      </div>
      <div className={styles.heroSection}>
        <h1>
          From our kitchen,
          <br />
          to your tummy
        </h1>
        <div>
          <Image
            src="/donuts.png"
            height={500}
            width={500}
            alt="donut logo"
            className={styles.donutImage}
          />
        </div>
      </div>
      <div className={styles.gallery}>
        <h3>Our Gallery</h3>
        <div className={styles.galleryItems}>
          <Image
            src="/d1.jpg"
            height={300}
            width={250}
            alt="donut logo"
            className={styles.donutImage}
          />
          <Image
            src="/d2.jpg"
            height={300}
            width={250}
            alt="donut logo"
            className={styles.donutImage}
          />
          <Image
            src="/d3.jpg"
            height={300}
            width={250}
            alt="donut logo"
            className={styles.donutImage}
          />
        </div>
      </div>
    </div>
  );
}
