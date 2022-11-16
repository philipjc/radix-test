import React, { ReactElement } from 'react';

export function MainHeroCopy(): ReactElement {
  return (
    <div
      className="is-flex is-flex-direction-column is-align-items-flex-start p-2 mt-4 ml-5"
      style={{
        boxShadow: '0 2px 20px 30px rgba(60, 61, 61, 0.3)',
        backgroundColor: 'rgba(60,61,61,0.3)',
        position: 'absolute',
        zIndex: 1,
      }}
    >
      <h2 className="title is-2 white-color">Foode..</h2>
      <h5 className="subtitle is-5 white-color">Food for all the foode's</h5>
    </div>
  );
}
