import React from 'react';
import Footer from '../../Footer';
import Header from '../../header';

import Heading from '../../layout/Heading';

const PageForm = () => {
  return (
    <div>
      <Header>
        <Heading tag="h1" text="I am header" />
        <button>lofoo</button>
        <button>lofoo</button>
      </Header>

      <main>ifsgisj</main>

      <Footer>
        <Heading tag="h2" text="I am footer" />
        <button>lofoo</button>
        <button>lofoo</button>
        <button>lofoo</button>
        <button>lofoo</button>
      </Footer>
    </div>
  );
};

export default PageForm;
