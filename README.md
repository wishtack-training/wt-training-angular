# Tools

## Node 9
https://nodejs.org/en/

## Git
https://git-scm.com/

## IntelliJ EAP
https://www.jetbrains.com/idea/nextversion/

WARNING: Do not enable "vim" mode.

# Course material

## Wishtack courses
https://courses.wishtack.com

## Floobits
https://floobits.com/wishtack

## Repo
https://www.github.com/wishtack-training/wt-training-angular

## Checkout today's branch: YYYY-MM-DD.

## Install typescript and nodemon for cheap tests.
```
npm install -g nodemon typescript
```

## Auto compile && auto run

Open two terminals:

* Compile terminal
```
tsc --watch user-store.spec.ts
```

* Run terminal
```
nodemon user-store.spec.js
```

## New Angular app

* Install @angular/cli and yarn (because npm #@!@#)...

```
npm install -g @angular/cli yarn
```

* Create new app.
```
ng new training --skip-install --prefix=wt
```

* Install dependencies.
```
yarn install
```

## Debug tools

### Augury chrome extension.

https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd?hl=en

### ng.probe

* Select an element using chrome inspector.
* `ng.probe($0).componentInstance`

### IntelliJ

* https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji

# Links

## Event loop
https://www.youtube.com/watch?v=8aGhZQkoFbQ

## NgDoc
http://ngdoc.io/

## Changelog & conventional commits
https://conventionalcommits.org/
https://github.com/conventional-changelog/conventional-changelog
https://github.com/semantic-release/semantic-release

## Angular 4 ng-packagr
https://medium.com/@ngl817/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e

## Wishtack
https://blog.wishtack.com
http://courses.wishtack.com

## Rest APIs
https://blog.wishtack.com/api-rest-bonnes-pratiques-et-securite/

## Angular Auth Demo
https://github.com/wishtack/wt-angular-auth-demo

## RxJS
http://rxmarbles.com/

## Frontend Bible
https://frontendmasters.com/books/front-end-handbook/2017/tools/diagram.html
