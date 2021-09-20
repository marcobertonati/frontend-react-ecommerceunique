import React , {useState, useEffect} from 'react';
import Login from '../components/login/login';
import Logout from '../components/logout/logout';
import { loginService } from '../services/signUpService';
import { logoutService } from '../services/logoutService';
import {    checkLoginService  } from '../services/loginService';

export default function LoginContainer () {

    const [userUserRegistered, setUserRegistered] = useState([])

    function logIn(e) {
        e.preventDefault();
        console.log('Ingresó a la funcion Login')
        const user = document.getElementById('user-login').value;
        const userLogin = {
            username: user,
            timestamp: new Date().toLocaleString()
        }
        const result = loginService(userLogin);
        result
            .then(data=>{
                console.log('Esto trae el Login');
                console.log(data);
                setUserRegistered(data);
            })
            .catch(err=>console.log(err))
    }

    function logOut(e) {
        e.preventDefault();
        console.log('Ingreso a la función Logout');
        const result = logoutService();
        result
            .then(data=>{
                console.log('Esto trae Logout');
                console.log(data);
                setUserRegistered(data);
            })
    }


    useEffect(()=> {
        console.log('Se ejecutó el use Effect');
        // console.log(userUserRegistered);

        // const checkLogin = checkLoginService()
        // checkLogin
        //     .then(data => {
        //         console.log('Se ejecutó CheckLogin')
        //         console.log(data);
        //     })
        //     .catch(err=>console.log(err))
        

    },[userUserRegistered])

    return(
        <>
            <Login logIn={logIn}/>
            <div>
            {
                userUserRegistered.length === 0 ? <h2>No hay usuario registrado</h2> : 
                    userUserRegistered.isRegistered == false ? <h2>{userUserRegistered.msg}</h2> : 
                    <>
                    <h2>Bienvenido {userUserRegistered.username}</h2>
                    <Logout logOut={logOut} />
                    </>
            }

            </div>

        </>


    )
}