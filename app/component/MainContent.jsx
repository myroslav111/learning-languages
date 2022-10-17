const MainContent = ({ stylesProp, bg, children }) => {
  return (
    <main className={stylesProp} style={{ background: `${bg}` }}>
      <div>
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};


export default MainContent;