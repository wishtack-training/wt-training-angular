# CodesandboxAngularTesting

This is a template for codesandbox, you can fork it here: https://codesandbox.io/s/github/wishtack/codesandbox-angular-testing/tree/master/

<p align="center">
    <img src="https://github.com/wishtack/codesandbox-angular-testing/raw/master/screenshot.png" alt="Codesandbox Angular Testing">
</p>

## Run Karma
```sh
yarn test
```

## Run Jest
```sh
yarn jest
```

## Known issues
🐞 There are some memory limitations on codesandbox that can make karma crash.
If you want to use karma and you don't need to run the app simultaneously, then you can simply replace `"start": "ng serve..."` by `"start": "ng test"`.
Codesandbox will run karma instead of the app which will reduce memory usage.
