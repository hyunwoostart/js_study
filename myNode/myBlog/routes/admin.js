const express = require("express");
const router = express.Router();
const adminLayout = "../views/layouts/admin";
const adminLayout2 = "../views/layouts/admin-nologout";
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

/**
 * Admin Page
 * GET /admin
 */
router.get("/admin", (req, res) => {
    const locals = {
        title: "관리자 페이지",
    };
    res.render("admin/index", { layout: adminLayout2 });
});

/**
 * Check Login
 * POST / admin
 */

router.post("/admin", asyncHandler(async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json( {message: "일치하는 사용자가 없습니다."});
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json( {message: "비밀번호가 일치하지 않습니다."});
    }

    const token = jwt.sign({ id: user._id }, jwtSecret);
    res.cookie("token", token, { httpOnly: trun });
    res.redirect("/allPosts");
}))

/**
 * View Register Form
 * Get /register
 */
router.get("/register", asyncHandler(async (req, res) => {
    res.render("admin/index", { layout: adminLayout2});
}));

/**
 * Register Adiministrator
 * POST /register
 */
router.post(
    "/register",
    asyncHandler(async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            username: req.body.username,
            password: hashedPassword,
        });
        // res.json(`user created: ${user}`);
    })
);

module.exports = router;