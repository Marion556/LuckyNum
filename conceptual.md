### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
RESTful routing is a set of standards that uses HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern.


- What is a resource?
A resource is an object that a web API can provide information about.


- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
Bulding a JSON API passes the information from the route to a JSON dictionary in postgreSQL via POST.


- What does idempotent mean? Which HTTP verbs are idempotent?
Idempotence describes an action which, whether performed once or multiple times, has the exact same effect on the output. GET PATCH PUT DELETE are indempotent.


- What is the difference between PUT and PATCH?
PUT updates the entire server while PATCH updates a small part of it.


- What is one way encryption?
It is when sensitive information is not stored in the database and only the user can access it and modify it.


- What is the purpose of a `salt` when hashing a password?
Hashing a password adds secuirty to it by turning a human-readable password into binary code. 'Salt' is a random piece of code that will be added to the end of the hashed password for extra security.


- What is the purpose of the Bcrypt module?
It is a python module to enable ease of use with the bcrypt password hashing function.


- What is the difference between authorization and authentication?
Auhthorization checks if user is allowed to view certain features of the app, while authentication validates the login.