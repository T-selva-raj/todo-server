var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user.controller');
const { upload, uploadToSupabase } = require('../middleware/upload');


router.get('/profile', passport.authenticate('jwt', { session: false }), userController.profileData);
router.put('/profile',
    passport.authenticate('jwt', { session: false }),
    upload.single("profileImage"), uploadToSupabase,
    userController.editProfile
);

module.exports = router;
