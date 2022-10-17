import stylesFooter from '../../styles/Footer.module.scss';


const Footer = ({ children }) => {
  return (
    <footer className={stylesFooter.footerSection}>
      <div className={stylesFooter.footerWrapp}>
        <div className="container">
          <div className={stylesFooter.footer}>{children}</div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;