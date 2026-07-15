import * as winston from 'winston';

//Aop
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logger/combined.log' })
    ]
});

const erLoger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logger/error.log' })
    ]
});

logger.info("sample")
erLoger.error("sample")


