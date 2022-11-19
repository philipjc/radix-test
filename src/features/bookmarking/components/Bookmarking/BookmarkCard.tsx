import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import useBookmarking from '../../hooks/useBookmarking';
import { faBookmark, faBell } from '@fortawesome/free-solid-svg-icons';

const useBookmarking = () => {
  return { hasLikedRecipes: true, bookmarks: [] };
};

const copy = {
  header: 'My Meals',
  lead: (hasBookmarks: boolean, saved: number) =>
    hasBookmarks ? `You have ${saved} saved recipes.` : 'You have no recipes saved at this time.',
};

const StyledIcon = styled(FontAwesomeIcon)`
  opacity: 0.3;
`;

const FullColourIcon = styled(FontAwesomeIcon)`
  opacity: 1;
`;

const BellAnimation = styled(FontAwesomeIcon)`
  animation-duration: 0.7s;
  animation-name: littleShake;
  animation-iteration-count: 3;
  animation-direction: alternate;

  @keyframes littleShake {
    from {
      transform: rotate(-3deg);
    }

    5% {
      transform: rotate(3deg);
    }

    10% {
      transform: rotate(-10deg);
    }

    to {
      transform: rotate(10deg);
    }
  }
`;

export function BookmarkCard(): ReactElement {
  const bookmarking = useBookmarking();
  const { hasLikedRecipes, bookmarks } = bookmarking;

  return (
    <div className="column card-content">
      <div className="media is-justify-content-space-between">
        <div className="media-left">
          {hasLikedRecipes ? (
            <FullColourIcon icon={faBookmark} style={{ fontSize: '2em' }} />
          ) : (
            <StyledIcon icon={faBookmark} style={{ fontSize: '2em' }} />
          )}
        </div>
        <div className="media-right">
          <BellAnimation icon={faBell} style={{ fontSize: '1.5em' }} />
        </div>
      </div>

      <div className="content">
        <div className="media-content">
          <p className="title is-size-4 has-text-left">{copy.header}</p>
          <p className="has-text-left is-size-5">{copy.lead(hasLikedRecipes, bookmarks.length)}</p>
        </div>
      </div>
    </div>
  );
}
