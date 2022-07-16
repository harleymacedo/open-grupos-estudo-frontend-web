import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const Login = () => {

    const navegar = (local) => {
        console.log('Navegar para ', local);
    }

    return(
        <div className='container--login'>
            <h4>Entrar no sistema</h4>
            <input type='text' placeholder='Email' className='input--login'/>
            <input type='password' placeholder='Senha' className='input--login' />
            <input type='button' value='Entrar' className='input--login input--button' /> 
            <nav>
                <ul>
                    <li>
                        {/* <Link to='/grupo' > Grupos </Link> */}
                    </li>
                </ul>
            </nav>
            <div className='login--links'>
                <a href='/grupo'>Cadastro</a>
                <a href='localhost:3000/grupo'>Esquecia a senha</a>
            </div>
        </div>
    )
}

export default Login;