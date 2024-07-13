function customRender(element, container){
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute('href',reactElement.props.href);
  // domElement.setAttribute('target',reactElement.props.target);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
      if(prop === 'children') continue;
      domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement);
  }

  

let reactContainer = document.querySelector('#root');
  
  let reactElement= {
  type: 'a',

  props:{
    href:'https://www.google.co.in',
    target:'_blank'
  },

  children:'Click to visit on google'

}

customRender(reactElement, reactContainer);