//@login &register
const express = require("express");

const passport = require("passport");

const router = express.Router();
const User = require("../../models/Profile");


//$router Get api/users/test
//@desc  返回请求的json数据
//@access public

// router.get("/test", (req, res) => {
//     res.json({msg: "login works"})
// });

//$router Get api/profiles/add
//@desc  创建信息的借口
//@access private

router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    if (req.body.type) profileFields.type = req.body.type;
    if (req.body.describe) profileFields.describe = req.body.describe;
    if (req.body.income) profileFields.income = req.body.income;
    if (req.body.expend) profileFields.expend = req.body.expend;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.remark) profileFields.remark = req.body.remark;

    new Profile(profileFields).save().then(profile => {
        res.json(profile);
    })
});

//$router Get api/profiles/:id
//@desc 根据ID获取 获取信息
//@access Private
router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }), (req, res) => {
        Profile.findOne({ _id: req.params.id })
            .then(profile => {
                if (!profile) {
                    return res.status(404).json("没有任何内容");
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    });


//$router Get api/profiles/
//@desc   获取所有信息
//@access Private
router.get(
    '/',
    passport.authenticate('jwt', { session: false }), (req, res) => {
        Profile.find()
            .then(profile => {
                if (!profile) {
                    return res.status(404).json("没有任何内容");
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    });



//$router Get api/profiles/editor
//@desc  编辑信息的借口
//@access private
router.post(
    '/edit/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const profileFields = {};
        if (req.body.type) profileFields.type = req.body.type;
        if (req.body.describe) profileFields.describe = req.body.describe;
        if (req.body.income) profileFields.income = req.body.income;
        if (req.body.expend) profileFields.expend = req.body.expend;
        if (req.body.cash) profileFields.cash = req.body.cash;
        if (req.body.remark) profileFields.remark = req.body.remark;

        Profile.findOneAndUpdate(
            { _id: req.params.id },
            { $set: profileFields },
            { new: true }
        ).then(profile => res.json(profile));
    });

//$router Get api/profiles/delete
//@desc  删除信息的借口
//@access private
router.delete(
    '/delete/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOneAndRemove(
            { _id: req.params.id }
        ).then(profile => {
            profile.save().then(profile => res.json(profile));
        })
            .catch(err => res.status(404).json("删除失败"));

    });
module.exports = router;