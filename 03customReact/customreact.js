function CustomRender(element, container){
  const DOMelement = document.createElement(element.type);
  DOMelement.innerHTML = element.children;

  for (const prop in element.props) {
    if(prop == 'children') continue;
    DOMelement.setAttribute(prop, element.props[prop]);
    }

    container.appendChild(DOMelement);
  }


const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click here to navigate to Google',
}

const elementContainer = document.getElementById('root');

CustomRender(reactElement, elementContainer);