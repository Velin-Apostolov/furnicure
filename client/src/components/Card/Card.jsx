import React from 'react';

const Card = ({ title, content, imageUrl }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />}
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-700">{content}</p>
            </div>
        </div>
    );
};

export default Card;
