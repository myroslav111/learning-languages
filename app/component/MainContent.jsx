const MainContent = ({ stylesProp, minWidth, children }) => {
  return (
    <main className={stylesProp}>
      <div style={{ minWidth: `${minWidth}` }}>
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
