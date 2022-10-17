const Button = ({stylesProp, widthbtn, heightbtn, type, children }) => {
   return <button className={stylesProp} style={{ width:`${widthbtn}`, height: `${heightbtn}`}} type={type}>{children}</button>;
};


export default Button;