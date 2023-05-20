import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Blogs</h1>

                <div className="bg-white rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className="text-gray-800 mb-4">
                        Access Token and Refresh token are commonly used in authentication system, access token used for access private resources where as refresh token is used for generate new access token when it expires.
                    </p>
                    <p className="text-gray-800 mb-4">
                        When a user logs in or authenticates, they are issued an access token and a refresh token. The access token is usually short-lived and contains information like the user's permissions and scope. It is sent with each request to authenticate the user. If the access token expires, the refresh token can be used to request a new access token without requiring the user to log in again.
                    </p>
                    <p className="text-gray-800">
                        Access token and refresh token can be store in different ways One common approach is to store the access token in the local storage or session storage, which makes it accessible only to the current browser tab or session. Refresh tokens, on the other hand, should be securely stored in an HTTP-only cookie to prevent cross-site scripting attacks.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Compare SQL and NoSQL databases?</h2>
                    <p className="text-gray-800 mb-4">
                        SQL and NoSQL databases are two different types of databases. SQL databases are relational databases, while NoSQL databases are non-relational databases.
                    </p>
                    <p className="text-gray-800 mb-4">
                        Relational databases store data in tables, which are made up of rows and columns. Each row represents a single record, and each column represents a single piece of data about that record. Relational databases use SQL (Structured Query Language) to access and manipulate data.
                    </p>
                    <p className="text-gray-800">
                        On the other hand, NoSQL databases do not store data in tables. Instead, they store data in different ways, depending on the type of NoSQL database. Some common NoSQL database types include key-value stores, document databases, and graph databases.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">What is express js? What is Nest JS?</h2>
                    <p className="text-gray-800 mb-4">
                        Express JS is a web application framework that is built on top of Node JS. It provides a set of tools and libraries that make it easy to develop web applications.
                    </p>
                    <p className="text-gray-800 mb-4">
                        Nest JS is a framework that builds on top of Express JS. It provides additional features and functionality that make it easier to develop scalable and maintainable web applications.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h2>
                    <p className="text-gray-800 mb-4">
                        MongoDB aggregate is a feature of MongoDB that allows developer to perform complex queries on data. Aggregate queries are made up of stages, which are executed in sequence. Each stage performs a different operation on the data.
                    </p>
                    <p className="text-gray-800 mb-4">
                        The most common aggregate stages are: match, group, project, sort, limit etc.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;