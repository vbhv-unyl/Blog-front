import React, { useEffect, useContext, useState } from 'react'
import './DisplayBlog.scss'

import BlogContext from '../../context/BlogContext';

import Comment from '../Comment/Comment';

function DisplayBlog() {
    const [imageUrl, setImageUrl] = useState(null);

    const { id, setId } = useContext(BlogContext);
    const { blog, setBlog } = useContext(BlogContext);

    const current = blog[id];

    const url = `http://localhost:8000/blog/${current.coverImageURL}`;

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(url);
                const imageData = await response.blob();
                setImageUrl(URL.createObjectURL(imageData));
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);

    const f = () => {
        console.log("Some work is done!!");
    }



    const comments = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://example.com/avatar1.jpg',
            content: 'Great post!',
        },
        {
            id: 2,
            name: 'Jane Smith',
            image: 'https://example.com/avatar2.jpg',
            content: 'I agree with you.',
        },
    ];


    const handleDelete = (commentId) => {
        console.log(`Deleting comment with ID: ${commentId}`);
    };


    return (
        <>
            <div className="blog-container">
                <h1 className="blog-title">{current.title}</h1>
                <div className="blog-image-container">
                    <img className="blog-image" src={imageUrl} alt="Failed to fetch" />
                </div>

                <div className="blog-description-container">
                    <p>{current.body}</p>
                </div>

                <div className="blog-comment-container">
                    <h2>Comments</h2>
                    <div className="comments-container">
                        {comments.map((comment) => (
                            <Comment
                                key={comment.id}
                                name={comment.name}
                                image={comment.image}
                                content={comment.content}
                                onDelete={() => handleDelete(comment.id)}
                            />
                        ))}
                    </div>
                    <input className="blog-comment-area" placeholder="Type your comment..." type="textarea" />
                    <button className="button" onClick={f}>Post</button>
                </div>
            </div>
        </>
    )
}

export default DisplayBlog;