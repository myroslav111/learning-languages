import React from 'react';

const Heading = ({ tag, text, color }) => {
  const Tag = tag || 'h1';
  return <Tag style={{ color: `${color}` }}>{text}</Tag>;
};

export default Heading;
