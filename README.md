# rally-node
rally project of node version 

### Development(use dev branch)
* install back-end
``` shell
npm install
```
* install front-end(app/client)
``` shell
npm install
npm run build:dll
npm run
```

* import sql table
* change db config(app/server/db/builder.js)

* run server
``` shell
node app.js
```

* flow check(OPTION)
``` shell
npm run flow:start
npm run flow
```


### font-end
* [X] minify bundle file
* [ ] eslint check
* [X] environment split
* [ ] remove flow any type
* [ ] defect detail page
* [X] dashboard page
* [ ] user page
* [ ] config page


### back-end
* [ ] db design( in progress)
* [X] logger
* [X] VO to DTO convert
* [X] move business check to service
* [ ] user auth
