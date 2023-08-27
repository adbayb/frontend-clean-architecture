# frontend-clean-architecture

A frontend clean architecture proposal to enforce a loosely coupled business logic. 
A modular design with a [screaming architecture file structure](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) has been adopted to split the application into independent bounded contexts while making the file structure scream the intent of the application without looking at implementation details.

## 🏗️ Architecture

![Clean Architecture overall class diagram](https://github.com/adbayb/frontend-clean-architecture/assets/10498826/c97241bf-e434-472d-bf97-3ba74ed7ecb6)
[Source](https://codereview.stackexchange.com/a/244642)

## 📚 Resources

- [Pull-based vs push-based approach managing use case output](https://softwareengineering.stackexchange.com/a/420360) or [why presenters (push-based) should be preferred to returned use case values (pull-based) "since communication from Controller to Presenter is meant to go through the application "layer" then yes making the Controller do part of the Presenters job is likely a domain/application leak."](https://lukemorton.tech/articles/nuances-in-clean-architecture)
- [Single responsibility principle and mixing presenter/controller (not mixing them allows better flexibility later if some other ways of displaying data (ie. presenters) should be supported (Web, CLI, JSON, ...))](https://stackoverflow.com/questions/64415618/clean-architecture-controller-and-presenter-should-always-be-separate-classes-o)