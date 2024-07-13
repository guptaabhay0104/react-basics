import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let username = 'Abhay'
// const ReactElement = React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},
//   'click here to visit to Google Site',
//   username
// )

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Click Me to Navigate TO Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  AnotherElement
)
