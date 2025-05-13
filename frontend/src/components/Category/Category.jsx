import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import axios from 'axios';
import './Category.css';

const Category = () => {
    const { token } = useContext(userContext);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/Category")
            .then((result) => {
                setCategories(result.data.result);
            })
            .catch((error) => {
                console.log("Failed to load categories", error);
                setError("Error, something is wrong while loading categories");
            });
    }, []);

    const handleCategoryClick = (category) => {
        if (!selectedCategories.find(elem => elem._id === category._id)) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleNavigate = () => {
        const id = selectedCategories.map((elem) => elem._id).join(',');
        const categoryName = selectedCategories.map((elem) => elem.name).join(', ');
        navigate(`/post/${id}`, {
            state: { categoryName },
        });
    };

    return (
        <div className="category-page">
            <div className="side-menu">
                <h3>Selected Categories</h3>
                {selectedCategories.length === 0 && <p>No category selected</p>}
                {selectedCategories.map((elem) => (
                    <div key={elem._id}>
                        <p>{elem.name}</p>
                    </div>
                ))}
            </div>

            <div className="category-list">
                <h2>Categories</h2>
                {error && <p className="error">{error}</p>}
                {categories.map((elem) => (
                    <div
                        key={elem._id}
                        className="categories-items"
                        onClick={() => handleCategoryClick(elem)}
                    >
                        <h3>{elem.name}</h3>
                        <p>{elem.title}</p>
                        {elem.image && <img src={elem.image} alt={elem.name} />}
                    </div>
                ))}
                {selectedCategories.length > 0 && (
                    <div className="go-button-container">
                        <button onClick={handleNavigate} className="go-to-posts-btn">
                            Go
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;
