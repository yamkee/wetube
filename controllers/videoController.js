export const home =(rep,res)=> res.render("home", {pageTitle : "Home"});
export const search =(rep,res)=> res.render("search", {pageTitle : "Search"});

export const videos=(rep,res)=>res.render("videos", {pageTitle : "Videos"});
export const upload=(rep,res)=>res.render("upload", {pageTitle : "Upload"});
export const videoDetails=(rep,res)=>res.render("videoDetails", {pageTitle : "Video Details"});
export const editVideo=(rep,res)=>res.render("editVideo", {pageTitle : "Edit Video"});
export const deleteVideo=(rep,res)=>res.render("deleteVideo", {pageTitle : "Delete Video"});