import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './component/header/header'
import Main from './component/main/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-0 p-0 '>
    <Header />
    <Main />
    </div>
  )
}

export default App
