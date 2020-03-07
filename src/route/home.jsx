import React from 'react'
import ReactDOM from 'react-dom'
import Layout from 'src/component/Layout.jsx'
import Quote from 'src/component/Quote.jsx'
import Intro from 'src/component/Intro.jsx'
import Contact from 'src/component/Contact.jsx'

ReactDOM.render(
    <Layout>
      <Quote/>
      <Intro/>
      <Contact/>
    </Layout>,
    document.getElementById('root'))
