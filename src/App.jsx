import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter'
import Stopwatch from './Stopwatch'
import KittyGallery from './KittyGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Stopwatch /> */}
      <KittyGallery />
    </div>
  )
}

export default App
