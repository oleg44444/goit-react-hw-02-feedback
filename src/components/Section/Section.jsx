import React from 'react';
import style from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={style.title}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
