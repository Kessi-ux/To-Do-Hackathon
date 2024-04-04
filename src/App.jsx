import { useState } from 'react'
import { Nav} from './components/Nav'
import { Hero } from './pages/Hero'
import { Whoarewe } from './pages/Whoarewe'
import { Company } from './pages/Company'
import { AxiosPageApi } from './pages/Axiospageapi'
import { Api } from './pages/Api'
import { Description } from './components/Description'


function App() {
  
  return (
    <>
      <Nav />
      <Hero />
      <Company />
      <Whoarewe />
    </>
  )
}

export default App