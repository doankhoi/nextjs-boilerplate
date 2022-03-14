// @ts-ignore
export const loggerMiddleWare = store => next => action => {
  console.log('Calling:', action);
  next(action);
};

export default loggerMiddleWare;
