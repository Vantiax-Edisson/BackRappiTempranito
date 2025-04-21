import joi from 'joi';

const schema = joi.object({
    email: joi.string().required().email().messages({
        "string.base":  'Tiene que ser un String',
        'string.email': 'Esto no es un email'
    }),
    password: joi.string().required().min(4).messages({
        "string.base": 'Tiene que ser un String',
        "string.min": 'Tiene que tener minimo 4 caracteres'
    })
})

export default schema