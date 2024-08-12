import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Comment.scss';

function Comment({ name, image, content, onDelete }) {
    return (
        <div className="comment-card">
            <div className="comment-card__header">
                <img src={image} alt={name} className="comment-card__avatar" />
                <h3 className="comment-card__name">{name}</h3>
            </div>
            <p className="comment-card__content">{content}</p>
            <button className="comment-card__delete-btn" onClick={onDelete}>
                <DeleteIcon />
            </button>
        </div>
    );
};

export default Comment;