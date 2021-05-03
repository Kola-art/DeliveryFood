const initialState = localStorage.getItem('store_user');

const obj = JSON.parse(initialState);

const stateInObj = {
    login: obj ? obj.login : null,
    password: obj ? obj.password : null,
}

const reducer = (state = stateInObj, action) => {
    switch(action.type) {
        case 'LOG_IN':
           localStorage.setItem('store_user', JSON.stringify(action.payload));
           return state = action.payload;
        case 'LOG_OUT':
            localStorage.removeItem('store_user');
            return state = action.payload;
        default:
            return state;
    }
}

export default reducer;