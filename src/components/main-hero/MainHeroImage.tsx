import React from 'react';

const baconPic = 'https://baconmockup.com/620/200';

export function MainHeroImage() {
  return (
    <figure
      className="image column is-8 p-0"
      style={{
        backgroundImage: `url(${baconPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></figure>
  );
}
