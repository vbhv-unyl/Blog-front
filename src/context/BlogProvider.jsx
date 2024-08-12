import React, { useState } from 'react';
import BlogContext from './BlogContext';

const BlogProvider = ({ children }) => {
    const [id, setId] = useState(0);
    const [blog, setBlog] = useState([]);

    return (
        <BlogContext.Provider value={{ id, setId, blog, setBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogProvider;