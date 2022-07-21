const { User, App } = require("../Models");

/**
 * Creates new App 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const createApp = async (req, res) => {
    try {
        const { name, appid } = req.body;
        if (!name || !appid) throw "Required Fields are missing"

        const newApp = new App({
            name,
            appid
        })
        await newApp.save()

        return res.json({
            success: true,
            data:newApp
        })
    } catch (error) {
        console.dir(error)
        return res.status(400).json({ error })
    }
}

module.exports = {
    createApp
}