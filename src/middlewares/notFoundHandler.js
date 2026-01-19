export function notFoundHandler(req, res) {
    res.status(404)
    res.json({
        status: 'Error',
        message: `Route ${req.method} ${req.originalUrl} not found!`
    })
}