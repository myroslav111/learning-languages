import React from 'react';

const Heading = ({ tag, text, color, fontSize }) => {
  const Tag = tag || 'h1';
  return <Tag style={{
    fontSize: `${fontSize}`,
    color: `${color}`
  }}>{text}</Tag>;
};

export default Heading;
