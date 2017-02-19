angular-input-select-all
===
Learning how to use grunt tasks、bash script、travis ci for automated deployment.
[![Build Status](https://travis-ci.org/weihanchen/angular-input-select-all.svg?branch=master)](https://travis-ci.org/weihanchen/angular-input-select-all)

[![Coverage Status](https://coveralls.io/repos/github/weihanchen/angular-input-select-all/badge.svg?branch=master)](https://coveralls.io/github/weihanchen/angular-input-select-all?branch=master)

## [Demo](https://weihanchen.github.io/angular-input-select-all/)

## Requirements

- AngularJS 1.3+
- A modern browser (Chrome 31+, Firefox 29+, Safari 7+, Opera 12+, IE 10+)

## General requirements before running on development
```
$ npm install
$ npm run bower:install
```

## Test
```
$npm run test
```
## Release
run command `$npm run release` then generate folder list
* /build
* /coverage
* /examples/js/plugins

## Installing
* Direct download[(https://github.com/weihanchen/angular-input-select-all/releases)](https://github.com/weihanchen/angular-input-select-all/releases)
* Bower(`bower install angular-input-select-all`)
* NPM(`npm install angular-input-select-all`)

Add the scripts to your application.
```html
<script src="angular.js"></script>
<script src="build/angular-input-select-all.min.js"></script>
```

## Directive Usage
```html
<input type="text" ng-model="appCtrl.text"
       placeholder="Please input some text and test select all operation..." input-select-all />
```
