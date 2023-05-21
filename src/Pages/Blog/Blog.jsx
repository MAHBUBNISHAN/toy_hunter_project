import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' bg-red-100 m-8 p-5 rounded-lg'>
                <h3 className=' text-xl text-green-500'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className=' text-xs text-cyan-600 my-2'> 
                Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them. <br />
                s the name suggests, client-side storage allows the user to store data on the client. <br />

                </p>
            </div>
            <div className=' bg-red-100 m-8 p-5 rounded-lg'>
                <h3 className='text-xl text-green-500'>
                Compare SQL and NoSQL databases?

                </h3>
                <p className='text-xs text-cyan-600 my-2'>
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON
                </p>
            </div>
            <div className=' bg-red-100 m-8 p-5 rounded-lg'>
                <h3 className='text-xl text-green-500'>
                What is express js? What is Nest JS
                </h3>
                <p className='text-xs text-cyan-600 my-2'>
                Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI
                </p>
            </div>
            <div className=' bg-red-100 m-8 p-5 rounded-lg'>
                <h3 className='text-xl text-green-500'>
                What is MongoDB aggregate and how does it work
                </h3>
                <p className='text-xs text-cyan-600 my-2'>
                In MongoDB, aggregation operations process the data records/documents and return computed results. 
                MongoDB provides aggregation operations through aggregation pipelines — a series of operations that process data documents sequentially
                </p>
            </div>
        </div>
    );
};

export default Blog;