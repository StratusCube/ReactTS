# ReactTS Template Setup

__Gitlab__ [![build status](http://git.stratuscube.com:8088/templates/ReactTS/badges/master/build.svg)](http://git.stratuscube.com:8088/templates/ReactTS/commits/master)
__VSTS__ ![VSTS Build Badge](https://stratuscube.visualstudio.com/_apis/public/build/definitions/e8ce00ea-5f97-401a-97de-35e1938633c2/4/badge)

## Install __Node__ and __NPM__ Using Chocolatey

__Important:__ You must have 
[chocolatey](https://chocolatey.org/) before continuing.

Run the following command to install NPM using chocolatey

`cinst -yf nodejs npm`

## Install __NPM__ Using the windows installer

If you wish to install NPM another way please see [npmJS](https://www.npmjs.com/)

Now that NPM is installed you can install webpack and (optionally) TypeScript.

To do so type the following into your command window.


```
npm install -g webpack
```

If you choose to install TypeScript globally use


```
npm install -g typescript
```

_TypeScript is included in this template under packages.json_

You still may need to link TypeScript to the project. If that is the case `cd` 
to the directory containing the solution file and run `npm link typescript`

___

Now that NPM is installed with webpack and (optionally) TypeScript We can move on.

## Recommended Extensions for ReactTS Template

It is recommended that you have the following extensions installed for 
Visual Studio:

* [Webpack Task Runner] (https://visualstudiogallery.msdn.microsoft.com/5497fd10-b1ba-474c-8991-1438ae47012a) [^1]
* [NPM Task Runner](https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941) [^1]
* [ASP.NET and Web Tools](https://visualstudiogallery.msdn.microsoft.com/32f1fa1b-cdd5-4bd3-8f51-cd8f099f46bc?SRC=Featured) [^1]
* [Web Essentials 2015](https://visualstudiogallery.msdn.microsoft.com/ee6e6d8c-c837-41fb-886a-6b50ae2d06a2)
* [Web Extension Pack](https://visualstudiogallery.msdn.microsoft.com/f3b504c6-0095-42f1-a989-51d5fc2a8459)


Open the solution file `ReactTS.sln`.

## Setting Up Pre-Build Tasks

1. Restore packages
    1. Right click _Dependencies_ in the solution explorer
    2. Click restore packages [^2]
2. Open the Task Runner Explorer
    * Via Menus 
        1. Open the _view_ menu
        2. Then open _other windows_
        3. Click _Task Runner Explorer_
    * Via Keyboard: `ctrl + alt + bkspce`


Now that you have the __Task Runner Explorer__ open find `bundleconfig.json`, 
ensure that both JavaScript and StyleSheets have a binding of _Before Build_

Webpack must also run during pre-build. 

Locate `webpack.config.js` in the _Task Runner Explorer_, expand it, then expand 
development, then right click `Run - Development` and bind it to _Before Build_

[^1]: Required extensions and updates.
[^2]: Dependencies may still show as not installed.