const MainContent = ({
  stylesProp,
  stylesPropAdditionally,
  minWidth,
  children,
}) => {
  return (
    <main className={stylesProp}>
      <div style={{ minWidth: `${minWidth}` }}>
        <div className="container">
          <div className={stylesPropAdditionally}>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
