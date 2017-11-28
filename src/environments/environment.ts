// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDd-p8lPccq43kVrQaxr_hKQmYX-w356H8",
    authDomain: "xenos-employee.firebaseapp.com",
    databaseURL: "https://xenos-employee.firebaseio.com",
    projectId: "xenos-employee",
    storageBucket: "xenos-employee.appspot.com",
    messagingSenderId: "864510423211"
  }
};
