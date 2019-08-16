import routes from "./routes";

export const localMiddleware = (rep,res,next)=>{
    res.locals.siteName = "WeTube";
    res.locals.routes =  routes;
    console.log(res.locals);
    next();
};