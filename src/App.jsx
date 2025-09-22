import React from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className= 'w-full overflow-hidden'>
      <Navbar />
      <Header />
    </div>
  )
}

export default App