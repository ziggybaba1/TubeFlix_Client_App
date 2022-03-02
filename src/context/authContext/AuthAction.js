//Login Action
export const loginStart = () => ({
    type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});

//Register Action
export const registerStart = () => ({
    type: "REGISTER_START",
});

export const registerSuccess = (user) => ({
    type: "REGISTER_SUCCESS",
    payload: user,
});

export const registerFailure = () => ({
    type: "REGISTER_FAILURE",
});


//Logout Action
export const logoutStart = () => ({
    type: "LOGOUT",
});
