# eosjs-react-native
This is a simple react-native project in which the steps to configure eosjs on react-native are shown.
Since the node dependencies in the eosjs package are not 100% compatible with react-native (per example, elliptic curve cryptography and true number generation), the hacky solution is this example is to browserify the library to emulate it as a browser component in react-native.
At Eva, we needed a library to sign transaction and push them onto the EOS blockchain in our react-native app, hence we found this way.

## Authors
@raphgodro
