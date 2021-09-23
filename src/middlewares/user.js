module.exports = (req, res, next) => {
    res.locals.user = null;
    next();
}