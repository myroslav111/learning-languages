import AvatarBlock from "../../AvatarBlock";
import Footer from "../../Footer";
import Header from "../../header";
import Heading from "../../layout/Heading";
import MainContent from "../../MainContent";
import ButtonNavigate from "../../ui/ButtonNavigate";
import { footerBtnProps } from "../../ui/footerBtnProps";
import {btnWrapp} from '../../../../styles/Footer.module.scss';


const PageAuth = () => {
  return (
      <div>
        <Header>
            <Heading tag="h1" text="Авторизація" color="white" />
            <AvatarBlock />
        </Header>

        <MainContent>              
        </MainContent>
          
        <Footer>
        {footerBtnProps.map(({id, path, icon, tag, text }) => (
          <div key={id} className={btnWrapp}>
            <ButtonNavigate href={path}>{icon}</ButtonNavigate>
            <Heading tag={tag} text={text} />
          </div>
        ))}
        </Footer>
    </div>
  )
}


export default PageAuth;