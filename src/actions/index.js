export function loginState(payload) {
    
    return { type: "LOGIN_STAT", payload }
};


export function productList(payload) {
    return { type: "PROD_LIST", payload }
};

export function addproductList(payload) {
    console.log(payload);
    return { type: "ADD_PROD_LIST", payload }
};