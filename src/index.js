import _ from 'lodash'
import './index.css'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('color');
  return element;
}

document.body.appendChild(component());