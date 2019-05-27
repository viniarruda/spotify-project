# spotify-project


This project use:

- React
- Context + Hooks for Global State
- Axios
- React-Player
- LocalStorage for api token
- Styled-components
- FontAwesome


I use [my boilerplate](https://github.com/viniarruda/react-boilerplate) to create this project, despite using create-react-app, it is fully modified, leaving only the original project react-scripts. 


Use enviroment variables: 
If you need modify, change in file ```.env```

```

REACT_APP_DEV: http://localhost:8888
REACT_APP_SERVER_PROD = https://spotify-authentication-backend.herokuapp.com
REACT_APP_HML: https://homolog.site.com
REACT_APP_PROD: http://prod.site.com

```

### Context + Hooks VS Redux

I used Context + hooks to create a global State, this method use the hook ```useReducer```.
The method is equals to redux in reducers/actions.

In this project the custom hook does the same as the redux thunk. To create a new custom hook, you need to use the prefix use before the name. Example: useCustomHook.

If I use redux, I use the structure like this:

```
    ├── ...
    ├── src                       
    │   ├── components               # Common components
    │   ├── routes                   # Routes configuration
    │   ├── views                    # Views
    │   ├── store                    # Global state, reducers, actions, queries
    │   │   └── reducers.js          # Combine Reducers   
    │   │   └── index.js             # Create store, adding middlewares
    │   │   └── auth                 # Name of props. Ex: Products, Cart, User, Auth
    │   │       └── action-types.js  # The name of actions
    │   │       └── actions.js       # Use createActions for redux-actions
    │   │       └── queries.js       # Axios/Fetch requests
    │   │       └── reducers.js      # Initial State of redux props and reducers
    │   │       └── thunks.js        # Redux thunk to organize and call all the actions/queries
    │   └── utils                    # Helpers (axios, api, storage, etc...)
    ├── index.js                     # Register and initialize the app. Implement the route file
    └── .env                         # Global constants

```


## Run

### Server Project

The server is running in Heroku. The first time have a few delay, because the server stay in sleep

### Client Project

```git clone git@github.com:viniarruda/spotify-project.git```

```cd spotify-project```

```npm install```

```npm start```


If you have any problems, please tell me.

Enjoy!


