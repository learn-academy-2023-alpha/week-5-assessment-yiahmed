# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Calling super in a Ruby child class allows you to access/call a method with the same name within the Parent class. It is important the class that contains the super is a child of the class that contains the method you are accessing. The names of both methods must also match if you don't want any errors

Example: 
```ruby
class Parent
  def say_hello
    p "Hello from the parent!"
  end
end

class Child < Parent
  def say_hello
    super
    p "Hello from the child!"
  end
end

child = Child.new
child.say_hello
```
Output: "Hello from the parent!"
"Hello from the child!"

Researched answer: In Ruby, super is used to call a method with the same name as the current method in the parent class or module. When a method is called with super, the method definition in the parent class or module is executed, and any arguments passed to the current method are passed on to the parent method.

2. What is a gem?

Your answer: A gem is a library that is used within Ruby applications. They can include, code, documentation and other resources. They can be shared and reused among any Ruby developer in the Ruby community.

Researched answer: In Ruby, a gem is a packaged library or application that can be easily shared and reused by other developers. Gems are similar to libraries or packages in other programming languages, but they are specifically designed for use in Ruby applications. Gems can include code, documentation, and other resources, such as images or configuration files.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database that stores data into tables and each table consists of rows and columns. Tables share keys for easy access and storage of data. Other kinds of databases that exist include: Object-oriented databases and NoSQL databases.

Researched answer: A relational database is a type of database that stores and organizes data into one or more tables, with each table consisting of a set of rows and columns.
In addition to relational databases, there are several other types of databases, including:

NoSQL databases: These are databases that do not use the traditional tabular structure of relational databases, but instead use a variety of data models, such as document, graph, or key-value stores. Examples of NoSQL databases include MongoDB, Cassandra, and Redis.

Object-oriented databases: These are databases that store data in the form of objects, which can contain data and methods for manipulating that data. Examples of object-oriented databases include db4o and ObjectDB.

In-memory databases: These are databases that store data in memory rather than on disk, allowing for very fast access to data. Examples of in-memory databases include Redis and Memcached.

Columnar databases: These are databases that store data in columns rather than rows, allowing for faster data retrieval and analysis for certain types of queries. Examples of columnar databases include Apache Cassandra and Google Bigtable.

4. What are primary keys? Why are they important?

Your answer: A primary key is a unique that is used to identify each row in or a specific row in a database table. It's similar to a VIN number of a car since each vehicle has its now unique number. They are important because they can be used to retrieve specific information from a table and join information from one table into another.

Researched answer:  primary key is a unique identifier that uniquely identifies each record or row in a database table. It is a column or a set of columns that has a unique value for each row, which means that no two rows can have the same value in the primary key column(s). Primary keys are important because they ensure data integrity and provide a way to link data between tables.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are GET, POST, PUT, and DELETE. From these verbs the the corresponding CRUD action for each one are: GET, Read operation: retrieves data from the server, DELETE, deletes a record from the database. I don't the other two memorized but with some help from outside resources I could provide their CRUD actions.

Researched answer: The HTTP verbs, also known as HTTP methods, are a set of standardized requests used by web clients to interact with web servers. The main HTTP verbs are:

GET - retrieves a resource from the server. This verb is often used to retrieve data, such as a web page or a JSON object.

POST - sends data to the server to create a new resource. This verb is often used to submit form data, create a new record in a database, or upload a file.

PUT - updates an existing resource on the server. This verb is often used to modify data, such as updating a record in a database.

DELETE - deletes a resource from the server. This verb is often used to remove data, such as deleting a record from a database.

These HTTP verbs can be mapped to CRUD (Create, Read, Update, Delete) operations, which are the basic operations performed on a database or other data storage system:

GET - Read operation: Retrieves data from the server.

POST - Create operation: Creates a new record in the database.

PUT - Update operation: Updates an existing record in the database.

DELETE - Delete operation: Deletes a record from the database.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routes are a set of conventions for mapping HTTP request methods (GET, POST, PUT, DELETE, etc.) to CRUD (Create, Read, Update, Delete) operations on a resource in a web application.
The following are the most common RESTful routes:
GET /resources - retrieves a list of all resources
GET /resources/:id - retrieves a specific resource
POST /resources - creates a new resource
PUT /resources/:id - updates an existing resource
DELETE /resources/:id - deletes an existing resource

2. Model validations: Model validations are checks performed on the data in a model to ensure that it is valid and meets the requirements of the application. Model validations are important because they help ensure data integrity and prevent invalid data from being saved to the database, which can cause errors or corrupt the application's data.

3. Params: In web development, "params" is short for "parameters," which are pieces of data that are passed from a client, such as a web browser, to a server in an HTTP request. Parameters can be sent in the URL of the request or in the request body, depending on the HTTP method being used.

4. ERB: ERB (Embedded Ruby) is a templating language that allows developers to embed Ruby code in HTML or other text documents. ERB is commonly used in web development frameworks such as Ruby on Rails to generate dynamic content for web pages and works by using special tags to indicate where Ruby code should be inserted into a document.


5. API: API (Application Programming Interface) is a set of protocols, routines, and tools for building software applications. An API defines the way that two or more software components should interact with each other, providing a standardized way for applications to exchange data and services.
