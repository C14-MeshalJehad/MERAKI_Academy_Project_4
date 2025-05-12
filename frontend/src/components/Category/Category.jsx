import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import { useEffect } from 'react';
import axios from 'axios';

const Category = () => {
    const { token } = useContext(userContext);
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:5000/Category")
            .then((result) => {
                setCategories(result.data.categories)
                console.log(result.data.categories);
            })
            .catch((error) => {
                console.log("Failed to load categories", error);
                setError("Error, something is wrong while loading categories")
            })
    }, [])


    return (
        <div className="category-page">
            <h2>categories</h2>
            <div className="category-list">
                {error && <p className="error">{error}</p>}
                { categories && categories.map((elem) => {
                    <div key={elem._id} className="categories-items">
                        <h3>{elem.name}</h3>
                        <p>{elem.tittle}</p>
                        {elem.image && <img src={elem.image} alt={elem.name} />}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Category