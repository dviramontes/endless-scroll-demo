Endless scroll demo of reddit/r/rising feed
==============

## Uses

- Package manager: [jspm](http://jspm.io)
- ES6 modules
- Web server with live reload using [BrowserSync](http://browsersync.io)
- Gulp
- Unit tests: Karma, Mocha, Chai, Sinon


## Usage

- Clone the repo
- Install jspm `npm install -g jspm`
- `npm install`
- `jspm install`
- Gulp Tasks:
    - `gulp` or `gulp serve` To run the application on port 3000, watchin changes on js files (compiling jsx) and sass files (compile, autoprefix and produce sourcemaps).
    - `gulp test` Shortcut to run karma, it of course can be run directly without gulp
    - `gulp build` Same as `gulp` except it doesn't run a server
    - `gulp dist` Make a distribution copy: Bundle the application in one JS file and minify it with Uglify, compile sass files and minify them, put everything in the dist folder.


