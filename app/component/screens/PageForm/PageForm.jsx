import React from 'react'
import Header from '../../header'

import Heading from '../../layout/Heading'


const PageForm = () => {
  return (
    <div>
      <Header>
        <Heading tag='h1' text='I am header' />
        <button>lofoo</button>
        <button>lofoo</button>
      </Header>
      <main>ifsgisj</main>

      <Header>
      <Heading tag='h2' text='I am footer' />
        <button>lofoo</button>
        <button>lofoo</button>
        <button>lofoo</button>
        <button>lofoo</button>
      </Header>
    </div>
  )
}

export default PageForm