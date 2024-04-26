# Getting Started with Wallet Transaction Manager

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To use the project in local you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About the app

Wallet Transaction Manager is a simple app to fetch some simulated API responses of wallet details and transaction details and display in the UI.

The simulated API requests are made using promises with setTimeout withsome moderate timer
The store of the application is made with redux using thunk as a middleware
The folder structure of the app is as follows:

#### src - has the react components and stylesheets for the starting point of the project
##### actions - has the redux actions for fetching wallet and transaction details
##### components - has the more specific react components for displaying search-box, header, wallet and transaction detail widgets, etc.(Some of these components are generic and modular to support different scenarios)
##### config - has a config file to store some hardcoded values used in app and also contains two files for the two different responses of wallet and transaction details
##### reducers - has two different reducers for wallet and transaction respectively and a rootReducer to combine both of them
##### sdk - has two files to simulate fetch json payloads of wallet and transaction respectively with some timeouts

And at last some dependency additions in package.json to support redux, material ui, styled components, thunk and other related functionalities.

![image](https://github.com/BiswadeepRoy/wallet-transaction-manager/assets/22871888/158508e2-7f93-47c7-a2c4-b5a3eed7f302)

A typical view of the web application after entering a search string

## Future-Improvements: 
#### No test cases are written for this application as it was not requested but currently is a future scope
#### More better styling can be done as a future improvement
#### More better optimized and modular react code to be written as a future improvement

## Learn More About React

You can learn more about react in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
