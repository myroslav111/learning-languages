const Footer = ({
  children,
  footerSectionStyleProp,
  footerWrappStyleProp,
  footerButtonsWrapp,
}) => {
  return (
    <footer className={footerSectionStyleProp}>
      <div className={footerWrappStyleProp}>
        <div className="container">
          <div className={footerButtonsWrapp}>{children}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
