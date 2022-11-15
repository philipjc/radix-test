import React, { ReactElement } from 'react';

function ShimmerCard(): ReactElement {
  return (
    <div className="card shimmer-card mb-6" style={{ width: '300px' }}>
      <div className="shimmer">
        <div className="_2iwr"></div>
        <div className="_2iws"></div>
        <div className="_2iwt"></div>
        <div className="_2iwu"></div>
        <div className="_2iwv"></div>
        <div className="_2iww"></div>
        <div className="_2iwx"></div>
        <div className="_2iwy"></div>
        <div className="_2iwz"></div>
        <div className="_2iw-"></div>
        <div className="_2iw_"></div>
        <div className="_2ix0"></div>
      </div>
    </div>
  );
}

export default function MealShimmer() {
  return (
    <div className="column is-10 ml-auto mr-auto pb-0">
      <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n: number, id: number) => {
          return <ShimmerCard key={`${n}-${id}`} />;
        })}
      </div>
    </div>
  );
}
