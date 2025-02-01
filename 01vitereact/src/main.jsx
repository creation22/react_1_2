import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
function Myapp (){
  return (
    <div>Custom myapp</div>
  )
}
// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : "click me to visit google"
// }
const anotheruser = "chai aur react "
const Anotherelement = (
  <a href ="https://google.com" target ="_blank">click here to visit googleeee </a>
);

const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com',target : '_blank'},'click me to visit the website google ',anotheruser
)

createRoot(document.getElementById('root')).render(
  
  ReactElement
  
)
