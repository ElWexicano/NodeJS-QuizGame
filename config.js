/*
    Configuration File 
    Author  : Shane Doyle
    Date    : 16/09/2012
    This file is used to store the configuration
    settings for the application.
*/
module.exports = function(app, express, mongoose){

  var config = this;

  app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
  });

  app.configure('development', function(){
    //app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

    //app.mongoose.connect('mongodb://localhost/nodemvr');
  });

  app.configure('production', function(){
    //app.use(express.errorHandler());

   // app.mongoose.connect('mongodb://flame.mongohq.com:27087/nodemvr');
  });

  return config;
};
