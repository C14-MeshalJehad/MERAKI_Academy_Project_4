import React, { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../App";
import "./Profile.css"
import axios from "axios";

const Profile = () => {
    const { user, setUser } = useContext(userContext)

    if (!user) return <p>Loading profile...</p>

    const defaultAvatar = "/images/default-avatar.png"
    const defaultBanner = "/images/default-banner.jpg"

    const [bio, setBio] = useState(user.bio || "")
    const [country, setCountry] = useState(user.country || "")

    console.log(token);
    console.log(user);
    
    

    const handleBio = (e) => {
        setBio(e.target.value)
        setUser({ ...user, bio: e.target.value })

    }
    const handelCountry = (e) => {
        setCountry(e.target.value)
        setUser({ ...user, country: e.target.value })
    }

    return (
        <div className="profile-conteainer">
            <div className="profile-banner">
                <img
                    className="banner-image"
                    src={user.banner || defaultBanner}
                    alt="Banner"
                />
                <img
                    className="profile-avatar"
                    src={user.avatar || defaultAvatar}
                    alt="Avatar"
                />
            </div>
            <div className="profile-info">
                <h2>
                    {user.displayName}
                </h2>
                <p className="profile-username">@{user.userName}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Followers:</strong> {user.followers || 0}</p>
                <p><strong>Following:</strong> {user.following || 0}</p>
                <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
                <p><strong>Memebr Since:</strong> {user.joinDate}</p>

                <div className="bio">
                    <label><strong>Bio:</strong></label>
                    <textarea
                        value={bio}
                        onChange={handleBio}
                        placeholder="Add bio"
                    />
                </div>

                <div className="country">
                    <label><strong>Country:</strong></label>
                    <select value={country} onChange={handelCountry}>
                        <option value=""> Select Your Country</option>
                        <option value="Jordan">Jordan</option>
                        <option value="KSA">KSA</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Profile