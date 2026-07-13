import { AnnotationFactory } from '@aspectjs/common';
import { AfterThrow, type AfterThrowContext, Aspect, on } from '@aspectjs/core';
import { getWeaver } from '@aspectjs/core';

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













