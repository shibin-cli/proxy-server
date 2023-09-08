declare module 'koa2-connect' {  
    import  Koa from 'koa';  
    import  http from 'http';  
    import  https from 'https';  
    
    function createMiddleware(options: any): Koa.Middleware;  
    module createMiddleware {  
      export function apply(server: http.Server | https.Server): void;  
    }  
    
    export = createMiddleware;  
  }