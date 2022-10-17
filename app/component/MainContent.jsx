const MainContent = ({ stylesProp, bg, bgI, children }) => {
  return (
    <main
      className={stylesProp}
      style={{ background: `${bg}`, backgroundImage: `${bgI}` }}
    >
      <div style={{ minWidth: '50vw' }}>
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
