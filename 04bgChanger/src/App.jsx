import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor : color}}></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button onClick={() => setColor('red')}
            className='outiline-none px-4 py-1 text-white rounded-xl'
            style={{backgroundColor: 'red'}}>Red</button>

          <button onClick={() => setColor('green')}
            className='outiline-none px-4 py-1 text-white rounded-xl'
            style={{backgroundColor: 'Green'}}>Green</button>

          <button onClick={() => setColor('blue')}
            className='outiline-none px-4 py-1 text-white rounded-xl'
            style={{backgroundColor: 'blue'}}>Blue</button>

          <button onClick={() => setColor('pink')}
            className='outiline-none px-4 py-1 text-white rounded-xl'
            style={{backgroundColor: 'pink'}}>Pink</button>

          <button onClick={() => setColor('Orange')}
            className='outiline-none px-4 py-1 text-white rounded-xl'
            style={{backgroundColor: 'orange'}}>Orange</button>

<button onClick={() => setColor('yellow')}
            className='outiline-none px-4 py-1 text-white rounded-xl'
            style={{backgroundColor: 'yellow'}}>Yellow</button>

        </div>
      </div>
    </>
  )
}

export default App
