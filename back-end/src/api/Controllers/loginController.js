const loginService = require('../Services/loginService');
const { utils } = require('../../utils');

async function validate(req, __res, next) {
  const loginInfo = req.body;
  await loginService.validate(loginInfo);
  return next();
}

async function login(req, res) {
  const loginInfo = req.body;

  const token = await loginService.login(loginInfo);
  return res.status(utils.HTTP_OK_STATUS).json({ token }).end();
}

module.exports = {
  validate,
  login,
};
