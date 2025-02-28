import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "App">
        <img src="/images/ucsc.jpg" alt="UCSC Logo" className="ucsc-logo" /> {/* Add this line */}
        <h1>Holidays Officially Observed by UCSC (2024-25)</h1>
        <h2>Enjoy your day off Slugs!</h2>
        <Board/>
        
    </div>
  )
}

export default App
