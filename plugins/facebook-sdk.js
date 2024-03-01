// plugins/facebook-sdk.js

export default defineNuxtPlugin(nuxtApp => {
  // Load Facebook SDK
  const loadFacebookSDK = () => {
    return new Promise(resolve => {
      if (window.FB) {
        resolve(window.FB);
        return;
      }
  
      window.fbAsyncInit = function() {
        FB.init({
          appId: '319182567374988',
          cookie: true,
          xfbml: true,
          version: 'v19.0',
        });
        resolve(FB);
      };
  
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    });
  };
  
  // Make the FB SDK available in the app
  nuxtApp.provide('facebookSDK', loadFacebookSDK);
});
  