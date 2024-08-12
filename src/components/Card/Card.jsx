import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

import BlogContext from '../../context/BlogContext';

const Card = ({ index, title}) => {

    const navigate = useNavigate();

    const { id, setId } = useContext(BlogContext);
    const { blog, setBlog } = useContext(BlogContext);

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const url = `http://localhost:8000/blog/${blog[index].coverImageURL}`;
                // const url = `http://localhost:8000/blog/1723461885490-gojo-satoru.jpg`;

                // console.log(blog[index].coverImageURL);

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
        setId(index);
        navigate('/view');
    }

    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content child-container">
                <h3 className="card-title">{title}</h3>
                <button className="card-button" onClick={f}>View</button>
            </div>
        </div>
    );
};

export default Card;