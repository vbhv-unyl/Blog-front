import React, { useEffect, useContext } from 'react'
import Card from "../Card/Card";
import './Blogs.scss'
import Navbar from '../Navbar/Navbar';

import BlogContext from '../../context/BlogContext';

function Blogs() {

    const { blog, setBlog } = useContext(BlogContext);

    const url = "http://localhost:8000/blog";

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div className="card-grid">
                {blog.map((post, index) => (
                    <Card
                    key={index}
                    index={index}
                    title={post.title}
                    description={post.body}
                    />
                ))}
            </div>

        </>
    )
}

export default Blogs;
