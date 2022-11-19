import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const copy = {
  header: 'My Meals',
  lead: 'Do you have any bookmarked?',
};

const StyledIcon = styled(FontAwesomeIcon)`
  opacity: 0.3;
`;

export function BookmarkCard(): ReactElement {
  return (
    <div className="column is-5 pt-0 pr-2 pb-0">
      <div className="card ml-auto is-flex" style={{ maxWidth: '468px' }}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <StyledIcon icon={faBookmark} style={{ fontSize: '2em' }} />
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