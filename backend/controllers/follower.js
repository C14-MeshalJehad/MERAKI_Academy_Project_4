const followModel = require("../models/followerSchema")
const userModel = require("../models/userSchema")

const makeFollow = (req, res) => {
    const followeId = req.token.userId
    const userToFollow = req.params.id
    if (followeId === userToFollow) {
        return res.status(403).json({
            success: true,
            message: "You cannot follow yourself",
        })
    }
    const newFollow = new followModel({
        follower: followeId,
        following: userToFollow
    })
    newFollow
        .save()
        .then((result) => {
            userModel
                .findByIdAndUpdate(
                    user, { $push: { followers: result._id } }, { new: true }
                )
                .then((newFollow) => {
                    res.status(200).json({
                        success: true,
                        message: `Yoh have followed ${userToFollow}`,
                        Follows: result
                    })
                })
                .catch((error) => {
                    res.status(404).json({
                        success: false,
                        message: "Error, try again later",
                        error: error.message
                    })
                })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Server Error",
                error: error.message
            })
        })
}


const unFollow = (req, res) => {
    const followeId = req.token.userId
    console.log("Follower ID:", followeId)
    const userToUnFollow = req.params.id
    console.log(userToUnFollow);
    if (followeId === userToUnFollow) {
        return res.status(403).json({
            success: false,
            message: "You cannot unfollow yourself"
        })
    }
    followModel
        .findOneAndDelete({
            follower: followeId,
            following: userToUnFollow
        })
        .then((deleteFollow) => {
            if (!deleteFollow) {
                return res.status(404).json({
                    success: false,
                    message: `Error, you are not following ${userToUnFollow} to unfollow him`
                })
            }
            userModel
                .findByIdAndUpdate(
                    followeId, { $pull: { following: userToUnFollow } }, { new: true }
                )

                .then((unFollowed) => {
                    userModel
                        .findByIdAndUpdate(
                            userToUnFollow, { $pull: { followers: followeId } }, { new: true }
                        )
                        .then((successUnFollow) => {
                            res.status(200).json({
                                success: true,
                                message: `You have successfully unfollowed ${userToUnFollow}`,
                                unFollow: unFollowed
                            })
                        })
                        .catch((error) => {
                            res.status(500).json({
                                success: false,
                                message: "Error while updating user's followers",
                                error: error.message
                            })
                        })
                })
                .catch((error) => {
                    res.status(500).json({
                        success: false,
                        message: "Error while updating current user's following",
                        error: error.message
                    })
                })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: `Error while unfollowing ${userToUnFollow}. Try again later`,
                error: error.message
            })
        })
}



module.exports = { makeFollow, unFollow }