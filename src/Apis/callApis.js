import axios from 'axios';
import {SERVER_URL} from '../Constants/constant';

export function LoginCheck(data){
    const prom =  new Promise((res,rej)=>{
        try{
            axios.post(SERVER_URL+'checkLogin.php',data)
            .then((response)=>{
                res(response);
            }).catch((response)=>{
                rej(response);
            });
        }
        catch(err){
            rej(err);
        }
    })
    return prom;
}

export function Signupme(data){
    const prom =  new Promise((res,rej)=>{
        try{
            axios.post(SERVER_URL+'signup.php',data)
            .then((response)=>{
                res(response);
            }).catch((response)=>{
                rej(response);
            });
        }
        catch(err){
            rej(err);
        }
    })
    return prom;
}


export function addProduct(data){
    const prom =  new Promise((res,rej)=>{
        try{
            axios.post(SERVER_URL+'addproduct.php',data)
            .then((response)=>{
                res(response);
            }).catch((response)=>{
                rej(response);
            });
        }
        catch(err){
            rej(err);
        }
    })
    return prom;
}


export function getProduct(){
    const prom =  new Promise((res,rej)=>{
        try{
            axios.post(SERVER_URL+'getproduct.php')
            .then((response)=>{
                res(response);
            }).catch((response)=>{
                rej(response);
            });
        }
        catch(err){
            rej(err);
        }
    })
    return prom;
}

