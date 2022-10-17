import stylesHeader from '../../styles/Header.module.scss';


const Header = ({ children }) => {
  return (
    <header className={stylesHeader.headerWrapp}>
      {/* <!-- Navbar --> */}
      <nav>
        <div className="container">
          <div className={stylesHeader.navbar}>{children}</div>
        </div>
      </nav>
    </header>
  );
};


export default Header;