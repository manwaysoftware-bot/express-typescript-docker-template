import * as winston from 'winston';

//Aop
export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'aop/logger/combined.log' })
    ]
});

export const erLoger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'aop/logger/error.log' })
    ]
});


