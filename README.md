__Configuration Procedure__


_Install Using Cmder_

    - cinst -yf npm
    - npm install -g typescript webpack
    - npm link typescript
    
_In Visual Studio_

    - In the Solution Explorer
        -> Right "Click Dependencies - not installed"
            --> Restore Packages

    - Tools Tab 
        -> Extensions and Updates
            --> Expand Updates
                ---> Update Web Extension Pack

    - View Tab
        -> Other Windows
            --> Task Runner Explorer
            
_In the Task Runner Explorer_

    - Expand bundleconfig.json
        -> Right Click JavaScript
            --> Bindings 
                ---> Ensure "Build Before" Is Checked
        -> Right Click Stylesheets
            --> Bindings 
                ---> Ensure "Build Before" Is Checked
                
                

                
