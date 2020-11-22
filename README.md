##  Generate App using Express Application Generator

mkdir rubys-kitchen-app
$ npx express-generator

### Following files and folders are created. 

create : public/
   create : public/javascripts/
   create : public/images/
   create : public/stylesheets/
   create : public/stylesheets/style.css
   create : routes/
   create : routes/index.js
   create : routes/users.js
   create : views/
   create : views/error.jade
   create : views/index.jade
   create : views/layout.jade
   create : app.js
   create : package.json
   create : bin/
   create : bin/www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=rubys-kitchen-app:* npm start

Create a folder named app inside public directory.

Download any static website templates which you would like to build
I used victory template (https://www.free-css.com/assets/files/free-css-templates/preview/page244/victory/)

Copy the template files inside the app directory.
Now we need to configure the request to be redirected to the static html templates.

Navigate to app.js and add the dependencies for the router.

Re-route the path '/' to the static html path
app.use(express.static(path.join(__dirname, 'public', 'app'))); // Configure the static path
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

install dependencies:
     $ npm install

run the app:
    $ DEBUG=rubys-kitchen-app:* npm start