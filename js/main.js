window.onload = () => {
  'use strict';
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('../service_worker.js');
  // }
  if (navigator.serviceWorker) {
	  navigator.serviceWorker.register('service_worker.js').then(function(registration) {
	    console.log('ServiceWorker registration successful with scope:',  registration.scope);
	  }).catch(function(error) {
	    console.log('ServiceWorker registration failed:', error);
	  });
	}
}