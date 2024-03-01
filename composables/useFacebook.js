export const useFacebook = () => {
  const { $facebookSDK } = useNuxtApp();

  const sharePost = async (url, quote) => {

    await $facebookSDK().then(FB => {
      FB.ui({
        method: 'share',
        href: url,
        quote: quote
      },
        function async(response) {

          if (response && !response.error_message) {
            console.log('Success while posting.');

          } else {
            console.error('Error while posting.');
          }
        },
      );
    });
  };

  return { sharePost };
};
