import React from 'react'
import ReactDOM from 'react-dom'
import Layout from 'src/component/Layout.jsx'
import Staff from 'src/component/Staff.jsx'
import Member from 'src/component/Member.jsx'

ReactDOM.render(
  <Layout>
    <Member />
    <Staff />
  </Layout>, document.getElementById('root'))
