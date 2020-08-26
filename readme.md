# Testing testing frameworks

> Creating examples of different testing libraries for comparison purposes.

# Conclusion
While Jest is ticking the most boxes. I think the syntax is to bloated in comparison with e.g. AVA and Tap. I really like the documentation of AVA and the simpleness of AVA.
AVA is super self explanatory and is super simple to use. A big plus for AVA as well is that they have a list of common pitfals in their readme. Which means that this list can come in handy to safe time. AVA is also able to test front-end components and they have other 'recipes' ready in their repo.
**I'd go for AVA.**

<br/>
<br/>
<br/>

## Requirements
- Assertions
- Mocking
- Coverage checking
- Reporting
- Separate testing 'modules' (e.g. test payments only)
- ?_HTTP testing_

|       	| Assertions 	|  Mock  	| Coverage  	| Reporting 	| Module based 	|
|:-----:	|:----------:	|:------:	|:---------:	|:---------:	|:------------:	|
|  Jest 	|      ✅     	|    ✅   	|     ✅     	|   ✅(3rd)  	|    ✅(file)   	|
|  Tap  	|      ✅     	| ❌(3rd) 	|     ✅     	|     ✅     	|    ✅(file)   	|
|  AVA  	|      ✅     	| ❌(3rd) 	|     ✅     	|   ✅(3rd)  	|    ✅(file)   	|
| QUnit 	|      ✅     	| ❌(3rd) 	|     ❌     	|   ✅(3rd)  	|     ✅(fn)    	|

Http testing is not available in most frameworks. We could use a seperata library for this. e.g.
- https://github.com/nock/nock
- https://github.com/visionmedia/supertest

<br/>
<br/>
## Testing frameworks/libs

- https://jestjs.io/
- https://node-tap.org/
- https://mochajs.org/
- https://jasmine.github.io/setup/nodejs.html
- https://nightwatchjs.org/
- https://www.cypress.io/
- https://github.com/avajs/ava
- https://qunitjs.com/
- https://github.com/visionmedia/supertest

### Filtering on qualification
- Jest
- Tap
- Ava
- Qunit

### Reason of comparison
These frameworks all have in common that they're a suite of features that contain most of the set requirements. Missing requirement could be added via third party libraries.

# The test itself
We'll be testing the `toTest.js` lib that contains some simple functions.

# Frameworks

## TAP
Tap claims to be a complete suite for testing but is very minimal and does require 3rd party libs to e.g. mock http etc. 
Due to TAP being so minimal it's also fairly easy to use and makes me think double about what tests to write and why. Do test really need to be so big and mock all the things? I read more on this in this post: 


###  positives
- Easy to use API, very easy to setup
- Configurable via `.taprc` file
- Doesn't need mocked service layer just mocked responses;
- Easy to integrate

### negatives
- Minimal documentation. No concrete examples ]
- doesn't have before/after All (or could be fixed with nested tests itself. So it's on purpose)
- Needs third party modules to serve http mocks or other stuff

<br/>
<br/>
## Jest 
Jest IS a full blown testing framework that also claims to be simple working with a most popular frameworks.

###  positives
- has before and after all.
- backed by large company
- has todo tests

### negatives
- Imo bloated function calls. It works with chaining functions
- Needs mocked service layer for all the things (will take more time)

<br/>
<br/>
## AVA
AVA is a test runner for Node.js with a concise API, detailed error output, embrace of new language features and process isolation that lets you develop with confidence 🚀

###  positives
- Small and concise
- Easy to setup.
- Easy to integrate
- Clean diff on assertions.
- Large docs

### negatives
- - Needs third party modules to serve http mocks or other stuff

<br/>
<br/>
## qUnit
QUnit is a powerful, easy-to-use JavaScript unit test suite. If you're new to QUnit, check out Getting Started with QUnit on the main site.

###  positives
- Easy to grasp docs.
- Claims to have 0 dependencies.

### negatives
- Needs third party modules to serve http mocks or other stuff
- Compared to others it has a weird syntax
