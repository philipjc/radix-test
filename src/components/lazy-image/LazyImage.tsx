import React from 'react';
// import MainHeroImage from '../../assets/images/hero-food-chop.jpg';

// const billMurrayPic = 'https://www.fillmurray.com/640/360';
const baconPic = 'https://baconmockup.com/640/360';
// const randomPic = 'https://loremflickr.com/640/360';

export function LazyImage() {
  return <img loading="lazy" src={baconPic} alt="A place holder pic" />;
}

// 80514248+philc-homehub@users.noreply.github.com
