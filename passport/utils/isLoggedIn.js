function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.send('not authorized');
}

module.exports = isLoggedIn;