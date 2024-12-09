import Joi from 'joi';

export const testValidators = {
  create: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    category: Joi.string().required(),
    mobileNumber: Joi.string()
      .pattern(/^\d{10,15}$/)
      .required(),
    city: Joi.string().allow(null, ''),
    branch: Joi.string().allow(null, ''),
    departmentName: Joi.string().allow(null, ''),
    createdBy: Joi.string().required()
  }),

  update: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    category: Joi.string(),
    mobileNumber: Joi.string().pattern(/^\d{10,15}$/),
    city: Joi.string().allow(null, ''),
    branch: Joi.string().allow(null, ''),
    departmentName: Joi.string().allow(null, ''),
    updatedBy: Joi.string().required()
  })
};