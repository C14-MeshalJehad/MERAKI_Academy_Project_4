import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../App";
import "./Posts.css";

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [commentInputs, setCommentInputs] = useState({});
    const { token } = useContext(userContext);

    const { categoryId } = useParams();
    const location = useLocation();
    const categoryName = location.state?.categoryName || "Selected Category";

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/Post/${categoryId}`)
            .then((res) => {
                setPosts(res.data.res);
                setError(null);
            })
            .catch((err) => {
                console.error("Error loading posts", err);
                setError("Failed to load posts for this category");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    const handleLike = (postId) => {
        axios.post(`http://localhost:5000/Like/${postId}/likePost`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(() => {
            setPosts(prevPosts =>
                prevPosts.map(post =>
                    post._id === postId
                        ? { ...post, likes: (post.likes || 0) + 1 }
                        : post
                )
            );
        }).catch((err) => {
            console.error("Like failed", err);
            alert("Failed to like the post.");
        });
    };

    const handleComment = (postId) => {
        const comment = commentInputs[postId];
        if (!comment || comment.trim() === "") return;
        axios.post(`http://localhost:5000/Comment/${postId}/comment`, { comment }, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(() => {
            setPosts(prevPosts =>
                prevPosts.map(post =>
                    post._id === postId
                        ? { ...post, comments: [...(post.comments || []), comment] }
                        : post
                )
            );
            setCommentInputs(prevInputs => ({ ...prevInputs, [postId]: "" }));
        }).catch((err) => {
            console.error("Comment failed", err);
            alert("Failed to add comment.");
        });
    };

    return (
        <div className="post-page">
            <h2 className="post-title">{categoryName} posts</h2>

            {loading ? (
                <p>Loading posts...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : posts.length === 0 ? (
                <p className="error-post">No posts found for this category</p>
            ) : (
                posts.map((post) => (
                    <div key={post._id} className="post-item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <p>Likes: {post.likes || 0}</p>
                        <button className="like-btn" onClick={() => handleLike(post._id)}>Like</button>

                        <div className="comments-section">
                            <p>Comments:</p>
                            {post.comments && post.comments.length > 0 ? (
                                post.comments.map((cmt, i) => (
                                    <div key={i}><p>{cmt}</p></div>
                                ))
                            ) : (
                                <p>No comments</p>
                            )}
                        </div>

                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={commentInputs[post._id] || ""}
                            onChange={(e) =>
                                setCommentInputs(prev => ({
                                    ...prev,
                                    [post._id]: e.target.value
                                }))
                            }
                        />
                        <button className="comment-btn" onClick={() => handleComment(post._id)}>Comment</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostPage;
