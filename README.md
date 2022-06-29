# frontend-clean-architecture

A frontend clean architecture proposal to enforce a loosely coupled business logic. 
A modular design with a [screaming architecture file structure](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) have been adopted to split the application into independent bounded contexts while making file structure screams the intent of the application without looking at implementation details.

## Resources

- [Pull-based vs push-based approach to manage use case output](https://softwareengineering.stackexchange.com/a/420360) or [why presenters (push-based) should be prefered to returned use case values (pull-based)](https://lukemorton.tech/articles/nuances-in-clean-architecture)
- [Single responsibility principle and mixing presenter/controller](https://stackoverflow.com/questions/64415618/clean-architecture-controller-and-presenter-should-always-be-separate-classes-o)