'use client';

import React from 'react';
import Image from 'next/image';
// import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import styles from './Slider.module.css';

const images = [
  '/assets/image/Rectangle 762.svg',
  '/assets/image/Rectangle 761.svg',
  '/assets/image/Rectangle 764.svg',
  '/assets/image/Rectangle 762.svg',
  '/assets/image/Rectangle 761.svg',
  '/assets/image/Rectangle 764.svg',
];

export const Slider = () => (
  <div className={styles.Slider}>
    {/*<div >*/}
    <Marquee>
      {images.map((image, index) => (
        <Image
          style={{ marginRight: '20px' }}
          key={index}
          height={1000}
          width={1000}
          className={styles.imageSLider}
          alt=""
          src={image}
        />
      ))}
    </Marquee>
    {/*</div>*/}
  </div>
);
