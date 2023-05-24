const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      if (Object.entries(req.body).length === 0) {
        next(HttpError(400, `missing fields`));
      }
      next(HttpError(400, error));
    }
    next();
  };
  return func;
};

module.exports = { validateBody };