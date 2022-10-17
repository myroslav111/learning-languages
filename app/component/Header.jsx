import { headerWrapp, navbar } from '../../styles/Header.module.scss';


const Header = ({ children }) => {
  return (
    <header className={headerWrapp}>
      {/* <!-- Navbar --> */}
      <nav>
        <div className="container">
          <div className={navbar}>{children}</div>
        </div>
      </nav>
    </header>
  );
};


export default Header;