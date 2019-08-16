export const join = (rep,res)=>res.render("join", {pageTitle : "Join"});
export const login = (rep,res)=>res.render("login", {pageTitle : "Log In"});
export const logout = (rep,res)=>res.render("logout", {pageTitle : "Log Out"});

export const users = (rep, res)=>res.render("users", {pageTitle : "Users"});
export const userDetail = (rep, res)=>res.render("userDetail", {pageTitle : "User Detail"});
export const editProfile = (rep, res)=>res.render("editProfile", {pageTitle : "Edit Profile"});
export const changePassword = (rep, res)=>res.render("changePassword", {pageTitle : "Change Password"});