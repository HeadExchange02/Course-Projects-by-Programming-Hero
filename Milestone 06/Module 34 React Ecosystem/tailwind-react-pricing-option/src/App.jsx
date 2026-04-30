import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/daisyNav'
import Navbar from './Components/NavBar/NavBar'
import PriceingOptions from './Components/Priceing/PriceingOptions'

const priceingPromise = fetch('pricingData.json').then(res => res.json())

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <PriceingOptions priceingPromise={priceingPromise}></PriceingOptions>
        </Suspense>
      </header>
      <main>
        
      </main>
    </>
  )
}

export default App
