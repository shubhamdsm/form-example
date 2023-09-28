export const userNameValidation = (name) => {
    return name.length >5 
}

export const emailValidation = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && email.length > 5
}

export const passwordValidation = (password) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password) && password.length > 5
}


export const validateForm = (userName,email,password) => {
    const errors = {};
    if (!userNameValidation(userName)) {
        errors.userName = "Username must be more than 5 characters";
    }
    if (!emailValidation(email)) {
        errors.email = "Email must be valid";
    }
    if (!passwordValidation(password)) {
        errors.password = "Password must be more than 5 characters";
    }
    return errors;
}