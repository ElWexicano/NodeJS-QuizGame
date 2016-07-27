NodeQuizGame
============

This is a simple quiz game that is created using Node.js, Expressjs, Mongoose, Mongodb, Jade and Bootstrap for Twitter. It will be deployed to [Cloud Foundry](http://cloudfoundry.com/) which is an open source PaS.

This quiz is based upon a project that developed in college as part of a Server Side Programming module.

Description
-------

The quiz will have the following two components:

1. **The Game**: this is the part of the application that the end-user will interact with to play the quiz. It will include a section which provides the rules to the quiz, records the user's name and location, and allows them play a new game.  

2. **The Quiz Manager**: this component is used by an administrator or manager to add, delete and edit quiz questions. They can also view all the questions that are currently in the quiz.

Game Rules
-------

* The user starts with 30 seconds to answer as many questions as possible.
* The clock will continue to countdown during the game.
* Each question answered correctly scores the user 1 point and they also gain an extra 3 seconds on the clock.
* Each question answered incorrectly results in 3 being taken away from the clock.
* The game ends once the clock reaches 0.

Features
-------

The application has the following features:

* A quiz that a user can play.
* A page that provides the user with the rules of the game.
* A list of the top 10 scoring users.
* The ability to add new questions using the Quiz Manager component.
* The ability to view questions using the Quiz Manager component. These questions can be edited or deleted.

Technologies
-------

The application was developed using:

* **Node.js**
* **Expressjs**
* **Mongoose**
* **Mongodb**
* **Jade**
* **Bootstrap**
* **Cloud Foundry**

Author
-------

**Shane Doyle**

+ http://twitter.com/iamshanedoyle
+ http://github.com/iamshanedoyle
