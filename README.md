# artifact-connect

### Features

##### Basic:
  - React + Redux
  - Babel 6 w/ basic presets and transform
  - Webpack w/ basic dev and prod configurations
  - Express development server
  - Eslint w/ basic configs
  - Redux DevTools + Logger middleware


***

### Requirements
  - `node 4.0.0` and higher!
    - [*you can use a version manager like `n`*](https://github.com/tj/n)

***

### Usage

##### Getting Started:

To begin, fork this repo and then clone those contents down!

Ideally, fork this boilerplate, then clone.
```
$ git clone <repo-url>
```

Install required dependencies.
(*Did you make sure you have the right version of Node?*)
```
npm install
```

**Note:** You could use `yarn` for faster install time

Run development server, complete with DevTools and related configuration.
```
npm run dev
```

You're now ready to get working! *(enter command or visit via browser directly)*
```
open http://localhost:3000/
```

***

##### Next Steps & Other Notes:

Now that your development server is up and running, you will see that you have your Redux DevTools available for you to use. The keyboard shortcuts available follow the generally accepted config - but you're free to make changes to them here: `containers/DevTools.js`.

***To toggle the DevTool panel during development:***
<kbd>CTRL</kbd> + <kbd>H</kbd>

***Change the DevTool panel's position during development:***
<kbd>CTRL</kbd> + <kbd>Q</kbd>

***

### Style Guide

Code style can be a tricky subject - I've instead decided to rely on the ever trustworthy configurations that AirBnb follows!

This project relies on `eslint-config-airbnb`.
Learn more here: [AirBnb Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

***
