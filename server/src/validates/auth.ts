import { celebrate, Joi } from 'celebrate';

export const authSchema = celebrate({
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
});
