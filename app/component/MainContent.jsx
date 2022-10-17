const MainContent = ({ stylesProp,  children }) => {
  return (
    <main className={stylesProp}>
      <div>
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};


export default MainContent;