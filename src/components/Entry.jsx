import React from 'react';

export const Entry = () => {
  return (
    <div className="entry pointer">
      <div
        className="entry__picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://picsum.photos/200/300)',
        }}
      ></div>

      <div className="entry__body">
        <p className="entry__title">A new day</p>
        <p className="entry__content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        </p>
      </div>

      <div className="entry__date-box">
        <span>Monday</span>
        <p>23</p>
      </div>
    </div>
  );
};
