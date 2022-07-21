const { User } = require("../Models");

/**
 * Creates new App 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const createApp = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) throw "Required Fields are missing"

        const newUser = new User({
            name,
            email
        })
        await newUser.save()

        return res.json({
            success: true,
            data:newUser
        })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

module.exports = {
    createApp
}