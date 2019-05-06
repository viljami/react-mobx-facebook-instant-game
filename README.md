# Camels

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Using:
  * Styles [Bulma Components](https://couds.github.io/react-bulma-components)
  * Store for application state management [Mobx](https://mobx.js.org/getting-started.html)
  * Framework [React](https://reactjs.org/)

Bulma Components have 4 high security issues!

## Setup

Create ```.env``` file to pass 3rd party api ids etc to the front end. The file format is:

```
REACT_APP_FACEBOOK_APP_ID=123456789
REACT_APP_SECRET_KEY=0000
```

```REACT_APP_``` - prefix is important if you want the env variable visible to the front end.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run serve-build`

To serve and test locally the build.

### `npm run deploy`

To deploy to the facebook instant games web hosting.

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

## Development thoughts

We could use simple trained regression algorithim or small neural network to calculate the resulting amount of camels. This could make the app harder to copy and tracking copies easier.

## Known bugs

Posting to Facebook and cancelling the post causes an exception to be thrown (in Promise and it is unhandled).

Localization improvements:
  * [Localization of React with Mobx](https://itnext.io/ultimate-localization-of-react-mobx-app-with-i18next-efab77712149)
  * [automatically detect the browser language](https://www.npmjs.com/package/i18next-browser-languagedetector)
  * [Localize instant game](https://developers.facebook.com/docs/games/instant-games/getting-started/game-setup#localize)
  * Skandinavian letter a with dots won't work as an html entity marking in translation.

Aria compatible select etc
  * [Reac-aria](https://www.npmjs.com/package/react-aria)


