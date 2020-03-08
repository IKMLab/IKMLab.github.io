import React from 'react'
import ReactDOM from 'react-dom'
import Layout from 'src/component/Layout.jsx'
import Professor from 'src/component/Professor.jsx'
import Member from 'src/component/Member.jsx'

ReactDOM.render(
    <Layout>
      <Professor/>
      <Member/>
    </Layout>, document.getElementById('root'))
