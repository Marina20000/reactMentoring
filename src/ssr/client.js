import React from 'react'
import { hydrate } from 'react-dom'
import  Footer  from './../components/page/Footer';

hydrate(
  <Footer/>,
  document.getElementById('root')
)