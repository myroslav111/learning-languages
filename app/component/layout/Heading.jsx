const Heading = ({ tag, text, color, fontSize, position }) => {
  const Tag = tag || 'h1';

  return (
    <Tag
      style={{
        fontSize: `${fontSize}`,
        color: `${color}`,
        textAlign: `${position}`,
      }}
    >
      {text}
    </Tag>
  );
};

export default Heading;
