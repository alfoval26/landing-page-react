import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Jumbotron } from './component/Jumbotron';
import { Nav } from './component/Nav';
import { Card } from './component/Card';
import { Footer } from './component/Footer';

function App() {
  

  return (
    <>
     <Nav />
     <Jumbotron />
     <div className='container'>
      <div className='row'>
                <div className='col-md-3'>
        <Card />
        </div>
        <div className='col-md-3'>
        <Card />
        </div>
        <div className='col-md-3'>
        <Card />
        </div>
        <div className='col-md-3'>
        <Card />
        </div>
      </div>
     </div>
     <Footer/>
    </>
  )
}

export default App
