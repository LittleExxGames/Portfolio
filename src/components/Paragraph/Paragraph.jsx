import React from 'react';
import "./Paragraph.css"

const Paragraph = ({ text, title }) => {
  return (
    <div className="paragraph">
      <h1>{title}</h1>
      {text.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Paragraph;
