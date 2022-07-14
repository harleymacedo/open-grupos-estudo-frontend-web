import React from 'react';
import './styles.css';

const Login = () => {

    const navegar = (local) => {
        console.log('Navegar para ', local);
    }

    return(
        <div className='container--login'>
            <h4>Entrar no sistema</h4>
            <input type='text' placeholder='Email' className='input--login'/>
            <input type='password' placeholder='Senha' className='input--login' />
            <input type='button' value='Entrar' className='input--login input--button' onClick={navegar('home')} />
            <div className='login--links'>
                <a href='https://www.heroku.com'>Cadastro</a>
                <a href='https://www.heroku.com'>Esquecia a senha</a>
            </div>
        </div>
    )
}

export default Login;