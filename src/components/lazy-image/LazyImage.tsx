import React from 'react';
// import MainHeroImage from '../../assets/images/hero-food-chop.jpg';

export function LazyImage() {
  return (
    <img
      loading="lazy"
      src="https://picsum.photos/200/?grayscale/?blur"
      alt="A table with plates and bowls of food and herbs"
    />
  );
}
