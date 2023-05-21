import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h3>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p> 
                Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them. <br />
                s the name suggests, client-side storage allows the user to store data on the client. <br />

                </p>
            </div>
            <div>
                <h3>
                Compare SQL and NoSQL databases?

                </h3>
                <p>
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON
                </p>
            </div>
            <div>
                <h3>
                What is express js? What is Nest JS
                </h3>
                <p>
                Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI
                </p>
            </div>
            <div>
                <h3>
                What is MongoDB aggregate and how does it work
                </h3>
                <p>
                
                </p>
            </div>
        </div>
    );
};

export default Blog;