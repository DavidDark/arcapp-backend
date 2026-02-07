const { Router } = require('express');
const router = Router();

router.get('/', [], async (req, res) => {
    const message = "Hello";

    res.json({
        message: message,
        users: "This is a user list for when we get to use login services"
    });
});

module.exports = router;