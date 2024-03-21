export const validateEmail = (email) => {
    if(!/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/.test(email)) return "Invalid email";
    return null;
}

export const validateUserName = (userName) => {
    if(!/^[a-zA-Z0-9._]{1,20}$/.test(userName)) return "Invalid user name";
    return null;
}

export const validatePassword = (password) => {
    if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) return "Invalid password";
    return null;
}