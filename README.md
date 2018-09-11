# eosjs-react-native
This is a simple react-native project in which the steps to configure eosjs on react-native are shown.
Since the node dependencies in the eosjs package are not 100% compatible with react-native (per example, elliptic curve cryptography and true secure random number generation), the hacky solution in this example is to browserify the library to emulate it as a browser component in react-native.
At [Eva](http://eva.coop/), we needed a library to sign transaction and push them onto the EOS blockchain in our react-native app, hence we found this way until a more suitable complete library is written.

## Authors
[@raphgodro](https://github.com/raphaelgodro)
## Dependencies
This would not have been possible without the work of these two libraries

- [EOSJS](https://github.com/EOSIO/eosjs)
- [RN-NODEIFY](https://github.com/tradle/rn-nodeify)

## New react-native project
In order to install this repository as a base for a new react-native app client do the following:

First, install the project.

```
git clone https://github.com/EvaCoop/eosjs-react-native/
cd eosjs-react-native
npm install
react-native eject
sh hack_to_browser.sh
react-native link
```

You need to do a little tweak now in the library `isomorphic-fetch` file `fetch-npm-browserify.js`

```
vi ./node_modules/isomorphic-fetch/fetch-npm-browserify.js

```
Add a line before the `module.exports` line.

```
var self = this;
```

Now you can try running the project, make sure the good HTTP address is set to your local RPC API Node in `EOS_example.js`.

```
react-native run-ios //or - react-native run-android
```

## Existing react-native project
The following steps describe how to integrate eosjs in an existing react-native project.

Your project needs to be created from `react-native init` and not the `create-react-native-app` cli. It has to be independent from `Expo` and configurable with Xcode and Android Studio. Browserifying doesn't work with react-native Expo projects.

First, install [rn-nodeify](https://github.com/tradle/rn-nodeify)

```
npm install rn-nodeify
```
Then Install eosjs, securerandom rn

```
npm i --save eosjs
```
Then make sure `require('crypto')` is present in the file shim.js at the root of the project

You need to do a little tweak now in the library `isomorphic-fetch` file `fetch-npm-browserify.js`

```
vi ./node_modules/isomorphic-fetch/fetch-npm-browserify.js

```
Add a line before the `module.exports` line.

```
var self = this;
```


You then need to activate the browserifying using the rn-nodeify script. It is written in a sh script in the repo.

```
sh hack_to_browser.sh
```
Then

```
react-native link
```

Now you can try running the project, make sure the good HTTP address is set to your local RPC API Node in `EOS_example.js`.

```
react-native run-ios //or - react-native run-android
```

## Roadmap and contribution
Contribution would be really appreciated. One day this library could properly map eosjs into a react-native package we can use the node package manager `npm` to install directly in a react-native project without the manual tweaking.
