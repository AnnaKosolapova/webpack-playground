{
  presets: ['es2015','react'],
  "env": {
    "development": {
    "plugins": [["react-transform", {
       "transforms": [{
         "transform": "react-transform-hmr",
         // if you use React Native, pass "react-native" instead:
         "imports": ["react"],
         // this is important for Webpack HMR:
         "locals": ["module"]
       }]
       // note: you can put more transforms into array
       // this is just one of them!
     }]]
    }
  }
}