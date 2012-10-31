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
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({secret: "crazysecretstuff", logged: false, originalRoute: ""}));
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + "/public"));
  });
  
  // Development Configuration
  app.configure("development", function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.mongoose.connect("mongodb://localhost/quizBank");
  });
  
  // Production Configuration
  app.configure("production", function(){
    app.use(express.errorHandler());

   // app.mongoose.connect("mongodb://flame.mongohq.com:27087/quizBank");
  });
  
  app.use(NotFoundErrorHandler);
  app.use(ErrorHandler);
  
  // Error Handling - Not Found
  function NotFound(msg) {
    this.name = "NotFound";
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
  } 
  
  // Error Handling - 404 Error
  function NotFoundErrorHandler(err, req, res, next) {
    if (error instanceof NotFound) {
      res.render("404.jade", {
        status: 400
      });
    } else {
      next(error);
    }
  }
  
  // Error Handling - 500 Error
  function ErrorHandler(err, req, res, next) {
    res.render("500.jade", {
      status: 500,
      locals: {error: err} 
    });
  }
  
  return config;
};
