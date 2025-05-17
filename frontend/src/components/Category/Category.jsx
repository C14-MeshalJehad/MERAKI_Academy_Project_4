import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css'; 

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/Category');
                setCategories(response.data);
            } catch (err) {
                setError('Failed to load categories.');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-page">
            <h2>Category</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <div className="category-list">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <div key={category.id} className="category-item">
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No categories available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Category;
