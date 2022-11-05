import React from 'react';
import MainHeroImage from '../../assets/images/hero-food-chop.jpg';

export function LazyImage() {
  return (
    <img loading="lazy" src={MainHeroImage} alt="A table with plates and bowls of food and herbs" />
  );
}
