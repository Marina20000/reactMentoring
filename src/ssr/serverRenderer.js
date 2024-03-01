 import { renderToString } from 'react-dom/server';
 import  Footer from './../components/page/Footer'
 import React from 'react'


function renderHTML(html){
  console.log("!!!!!!!!!!!!!!!!!!!!!!!")
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>    
        
        <script src="/js/main.js"></script>
      </body>
    </html>
    `
}
export default function serverRender(){
  console.log("AAAAAAAAAAAAAAAAAAAA")
  return (req,res) => {
    const rendered = renderToString (<Footer/>);
    res.send(renderHTML(rendered))
  }
}
