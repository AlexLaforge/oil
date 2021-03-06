/* eslint-disable global-require */
export function generatePolyfills(){
  if(!Object.values) {
    require('core-js/modules/es7.object.values');
  }

  if(window.Promise) {
    return;
  }
  require('core-js/modules/es6.symbol');
  require('core-js/modules/es6.object.assign');
  require('core-js/modules/es6.string.starts-with');
  require('core-js/modules/es6.array.iterator');
  require('core-js/modules/es6.array.fill');
  require('core-js/modules/es6.promise');

  require('core-js/modules/_core');

  if(typeof window.CustomEvent !== 'function') {
    /* eslint-disable no-inner-declarations */
    function CustomEvent ( event, params ) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      let evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
}

export default generatePolyfills();
