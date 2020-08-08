const AuthUser = require('../model/User');
//@desc Register
//@route Post /api/aut/
//@access Public

exports.CreateUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Hello Regiser' });
};
