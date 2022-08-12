const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
export function initFacebookSdk() {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: "v11.0",
      });

      // auto authenticate with the api if already logged in with facebook
      window.FB.getLoginStatus(async ({ authResponse }) => {
        if (authResponse) {
          window.FB.api("/me/permissions", "delete", null, () => {
            window.FB.logout();
          });
        } else {
          resolve();
        }
      });
    };

    // load facebook sdk script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
}

export async function login() {
  return new Promise((resolve, reject) => {
    window.FB.login(
      (response) => {
        if (response.status == "connected") {
          window.FB.api(
            "/me?fields=id,first_name,last_name,email",
            (data) => {
              window.FB.api("/me/permissions", "delete", null, () => {
                window.FB.logout();
              });
              resolve(data);
            },
            { scope: "email" }
          );
        }
      },
      { scope: "email" }
    );
  });
}
