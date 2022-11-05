import React, { ReactElement } from 'react';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iUseMeals } from '../../features/general/hooks/useMeals';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

export function MealsList(): ReactElement {
  const {
    food: {
      foodState: { fetching, meals },
    },
  }: iUseMeals = useMeals();

  console.log(fetching);
  console.log(meals);

  return (
    <DarkerDMSectionStyled className="section">
      <div className="column is-10 ml-auto mr-auto">
        <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
          {[1, 2, 3, 4, 5, 6].map(num => (
            <div
              className="card mr-2 ml-2 is-flex-grow-1"
              style={{ maxWidth: 250, marginBottom: 80 }}
            >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                  mauris. <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
