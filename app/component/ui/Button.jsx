
const Button = ({styles, widthbtn, heightbtn, type, children }) => {
   return <button className={styles} style={{ width:`${widthbtn}`, height: `${heightbtn}`}} type={type}>{children}</button>;
};


export default Button;