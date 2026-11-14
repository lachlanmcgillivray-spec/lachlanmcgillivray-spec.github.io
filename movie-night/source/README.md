# Movie Night source

`index.src.html` is the readable version of the page. `../index.html` is the same page
converted so older iPads can run it:

    npm i @babel/core @babel/preset-env
    node build.js index.src.html ../index.html

(Update the two `/tmp/node_modules/...` paths in build.js to wherever you installed Babel.)
