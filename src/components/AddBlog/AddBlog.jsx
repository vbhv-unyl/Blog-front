import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBlog.scss'
import axios from 'axios';

function AddBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [coverImage, setCoverImage] = useState(null);

    const navigate = useNavigate();
    const f = () => {
        navigate('/blog');
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };
    
    const handleFileChange = (event) => {
        setCoverImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('coverImage', coverImage);
    
        try {
          const response = await axios.post('http://localhost:8000/blog', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          f();

        } catch (error) {
          console.error('Error uploading file:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <input
                    type="textarea"
                    id="body"
                    name="body"
                    value={body}
                    onChange={handleBodyChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="coverImage">File Upload</label>
                <input
                    type="file"
                    id="coverImage"
                    name="coverImage"
                    onChange={handleFileChange}
                    required
                />
            </div>
            <button className="submit-button" type="submit">Submit</button>
        </form>
    );
};

export default AddBlog;