import joi from 'joi';

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        "string.base": 'En el nombre No sea tonto no le estoy pidiendo numeros',
        'string.alphanum': 'No uses caractes especiales como *+-. en el name'
    }),
    email: joi.string().required().email().messages({
        "string.base": 'aaaaaa',
        'string.email': 'Esto no es un email'
    }),
    password: joi.string().required(),
    photo: joi.string().required(),
    role: joi.number().required().min(1).max(3).messages({
        'number.min':'El role debe ser minimo 1',
        'number.max':'El role debe ser maximo 3'
    })
})

export default schema