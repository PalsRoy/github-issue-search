####### Github-API
One page application for querying atom issues.

<img width="1230" alt="screen shot 2019-02-08 at 12 56 09" src="https://user-images.githubusercontent.com/35367494/52479651-4478b080-2ba1-11e9-82f8-1496901591b9.png">

####### Requirements
Imagine you have to work in the the following scenario: Our customer support team have to interact with the Github issues search throughout the day. They're put off by typing queries and would much rather an interactive query builder that hides the actual query from them. Can you come up with a design that allows our customer support team to search GitHub issues in a more point-and-click, user-friendly way that doesn't involve typing complex queries? For the purpose of this exercise imagine that they are interested in all the filter parameters the API offers (author, labels, status, and so on). You will be building it as a Single-Page Application using HTML, CSS and Javascript. You can find the documentation for the Github API here: https://developer.github.com/v3/issues/ The most important feature the app has to include is a logic filter for the list of Github issues that scopes the results based on the query parameters. You are free to use any Javascript or CSS frameworks/libraries of your choice.

####### Technologies
React: Used React as a SPA becuase of its ease of curating components from scratch.
Redux: As the single source of truth for data sharing.
Axios: Promise based HTTP client for the browser and node.js

Decisions:
Used bootstrap and some inbuilt css for styling. In future would use some styled-components.
TODO : Need to add pagination.Add the repo name to be configurable. 
Used create-react-app for bootstrapping the project.

####### Approach
App:This is the main component and acts as a container for the other components. Haven't used it as a case of 'lifting state up' case.

searchForm: Stateful component for taking the query parameters based on which search will be performed.

SearchResults: This components gets the API information from the app, displays the information accordingly.

fetchFailure: This is a stateless component which displays the fetch failure condition.


####### Instructions to build the project
Download the project (zip or clone)
Install node and npm
Be sure to be inside the folder tessian
Run npm install
Run npm start
Enjoy
