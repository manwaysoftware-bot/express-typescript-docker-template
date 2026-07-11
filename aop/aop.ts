import { AnnotationFactory } from '@aspectjs/common';
import { AfterThrow, type AfterThrowContext, Aspect, on } from '@aspectjs/core';
import { getWeaver } from '@aspectjs/core';
import { erLoger, logger } from './logger.js';
import exp from 'express'

// Create an annotation in asp
export const LogErrors = new AnnotationFactory('demo').create(
'LogErrors',
);

@Aspect()
export class LogErrorsAspect {
  @AfterThrow(
    on.classes.withAnnotations(LogErrors),
    on.methods.withAnnotations(LogErrors),
  )
  logAround(context: AfterThrowContext, error: Error) {

    console.error(
      `${context.target}(${context.args.join(',')}) throwed error ${error}`,
    );
    // Propagate the error

  }
}

getWeaver().enable(new LogErrorsAspect());

@LogErrors()
export class Hello {
  hello: string;

  constructor(hello: string = 'hello') {
    this.hello = hello;
  }

  @LogErrors()
  sayHello(who: string = 'world') {
    throw new Error(`${this.hello} ${who}`);
  }
}


//Project
//Aop:Global middleware -> Respose success middleware -> This middleware will be executed for every request that is made to the server. It will log the request method and the request URL to the console.
//Always handle by 400,500 only globalerror handler only handle expection
export const resInterspector = (req: exp.Request, res: exp.Response, next: exp.NextFunction) => {
    console.log("req")
    res.on('finish', () => {
        logger.info(`Response: ${req.method} ${req.url} - ${res.statusCode}`);
    })
    next();
};

//Aop:Global error handling middleware -> Response error middleware -> This middleware will be executed for every request that is made to the server. It will log the error message to the console.
//this only trigger exception handleing only
export const globalErrorHandler = (err: Error, req: exp.Request, res: exp.Response, next: exp.NextFunction) => {
    erLoger.error(`Error: ${req.url} - ${err.message}`);
    res.status(404).send('server side error');
    next(err);
};

class ResError extends Error{

}














