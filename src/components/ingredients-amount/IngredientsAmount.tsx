import React, { MouseEventHandler, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPeopleGroup, faPlus } from '@fortawesome/free-solid-svg-icons';

interface IAmountProps {
  quantity: number;
  increase: MouseEventHandler;
  decrease: MouseEventHandler;
}

export function IngredientsAmount({ quantity, increase, decrease }: IAmountProps): ReactElement {
  return (
    <div className="column content is-flex is-justify-content-space-between is-align-items-center mb-0">
      <FontAwesomeIcon
        icon={faPeopleGroup}
        style={{
          fontSize: '1.8em',
          borderRadius: '25px',
          backgroundColor: '#fff',
          color: '#333',
          padding: '.2em',
        }}
      />
      <div className="is-flex is-justify-content-space-evenly is-align-items-center">
        <FontAwesomeIcon
          className="pr-6 is-size-5"
          icon={faMinus}
          onClick={decrease}
          style={{ cursor: 'pointer' }}
        />
        <span className="pr-6 is-size-5">{quantity}</span>
        <FontAwesomeIcon
          className="is-size-5"
          icon={faPlus}
          onClick={increase}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}
