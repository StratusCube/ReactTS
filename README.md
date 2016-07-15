# ReactTS Template Setup

## Install __NPM__ Using Chocolatey

__Important:__ It is important that you have 
[chocolatey](https://chocolatey.org/) before continuing.

Run the following command to install NPM using chocolatey

`cinst -yf npm`

## Install __NPM__ Using the windows installer

If you wish to install NPM another way please see [npmJS](https://www.npmjs.com/)

Now that NPM is installed you can install webpack and (optionally) TypeScript

to do so type the following into your command window.


```
npm install -g webpack
```

If you choose to install TypeScript globally use


```
npm install -g typescript
```

Type script in included in this template under packages.json

You still may need to link TypeScript to the project. If that is the case `cd` 
to the directory containing the solution file and run `npm ling typescript`

___

Now that NPM is installed with webpack and (optionally) TypeScript We can move on.

## Run ReactTS Template

Open the solution file `ReactTS.sln`.

It is recommended that you have the following extensions installed for 
Visual Studio:

* [Webpack Task Runner] (https://visualstudiogallery.msdn.microsoft.com/5497fd10-b1ba-474c-8991-1438ae47012a)[^1]
* [NPM Task Runner](https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941)[^1]
* [ASP.NET and Web Tools](https://visualstudiogallery.msdn.microsoft.com/32f1fa1b-cdd5-4bd3-8f51-cd8f099f46bc?SRC=Featured)[^1]
* [Web Essentials 2015](https://visualstudiogallery.msdn.microsoft.com/ee6e6d8c-c837-41fb-886a-6b50ae2d06a2)
* [Web Extension Pack](https://visualstudiogallery.msdn.microsoft.com/f3b504c6-0095-42f1-a989-51d5fc2a8459)

## Setting Up Pre-Build Tasks

1. Restore packages
    1. Right click _Dependencies_ in the solution explorer
    2. Click restore packages[^2]
2. Open the Task Runner Explorer
    * Via Menus 
        1. Open the _view_ menu
        2. Then open _other windows_
        3. Click _Task Runner Explorer_
    * Via Keyboard: `ctrl + alt + bkspce`


Now that you have the __Task Runner Explorer__ open find `bundleconfig.json`, 
ensure that both JavaScript and StyleSheets have a binding of _Before Build_

Webpack must also run during pre-build. 

_In the Task Runner Explorer_

    - Expand bundleconfig.json
        -> Right Click JavaScript
            --> Bindings 
                ---> Ensure "Build Before" Is Checked
        -> Right Click Stylesheets
            --> Bindings 
                ---> Ensure "Build Before" Is Checked
                
                

                

[^1]: Required extensions and updates.
[^2]: Dependencies may still show as not installed.