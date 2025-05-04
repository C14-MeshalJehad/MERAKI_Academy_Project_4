const authorization = (endpointPermission) => {
    return (req, res, next) => {
        const userPermission = req.token.permissions;
        if (userPermission.includes(endpointPermission)) {
            next();
        } else {
            res.status(403).json({
                success: false,
                message: "Unauthorized"
            });
        }
    };
};

module.exports = authorization;