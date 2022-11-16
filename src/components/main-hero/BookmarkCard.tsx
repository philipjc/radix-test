import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const copy = {
  header: 'My Meals',
  lead: 'Do you have any bookmarked?',
};

export function BookmarkCard(): ReactElement {
  return (
    <div className="column is-4 pt-0 pr-2 ml-1 pb-0">
      <div className="card ml-auto is-flex" style={{ maxWidth: '312px' }}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '2em' }} />
            </div>
          </div>

          <div className="content">
            <div className="media-content">
              <p className="title is-size-4 has-text-left">{copy.header}</p>
              <p className="has-text-left is-size-5">{copy.lead}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
