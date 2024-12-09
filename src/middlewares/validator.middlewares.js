import { ApiError } from '../utils/ApiError.js';

export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      throw new ApiError(400, "Validation Error", errors);
    }
    
    next();
  };
};
