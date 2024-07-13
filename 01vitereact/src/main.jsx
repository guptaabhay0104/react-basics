import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function Chai(){
//   return (
//     <h1>My chai is ready</h1>
//   )
// }

const anotherElement = (
  <div>
    <h2>Hey! Your tea is ready</h2>
  </div>
)

let message = 'Visit Google';

const ReactElement = React.createElement(
  'a',
  {href:'https://www.google.co.in', target:'_blank'},
  'Visit Google',
  message
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
