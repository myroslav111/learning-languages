import Footer from '../../Footer';
import Header from '../../header';

import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import ButtonNavigate from '../../ui/ButtonNavigate';

const PageForm = () => {
  return (
    <div>
      <Header>
        <Heading tag="h1" text="I am header" />
      </Header>

      <MainContent>
        <Heading tag="h1" text="I am main" />
      </MainContent>

      <Footer>
        {/* <Heading tag="h1" text="I am footer" /> */}
        <ButtonNavigate>hj</ButtonNavigate>
      </Footer>
    </div>
  );
};

export default PageForm;
