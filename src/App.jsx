import './App.css'
import React, { useState } from 'react';

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
   <main className='login-box'>
        <header >
        <img
    src="https://i.pinimg.com/originals/b1/98/19/b19819237f2cc0a1e51b611abb77736d.gif"
    alt="Decorativo"
    className="decorative-gif"
  />
            <h1>Login</h1>
            <p >Digite e-mail e senha: 
            </p>
        </header>
        <form action="/login" method="POST">
            <div className="form-group">
                <label for="email">email </label>
                <div className="input-group">
                    <input type="email" id="email" name="email" placeholder=" E-mail " required
                        autofocus/>
                </div>
            </div>
            <div className="form-group">
                <label for="password">Senha</label>
                <div className="input-group">
                    <input type="password" id="password" name="password" placeholder="senha" required/>


                </div>

            </div>
            <div className="forgot-password">
                <a href="/recuperar-senha">esqueceu sua senha?</a>
            </div>

            <div className="options">
                <div className="remember-me">
                    <input type="checkbox" id="remember" name="remember"/>
                    <label for="remember">Lembrar-se</label>
                </div>
            </div>
            <button type="submit">Entrar</button>

        </form>
        <div className="divider">
            <span>Ou continue com </span>
        </div>
        
            <a href="/cadastro">Criar conta</a>
        
  </main>
    </> )
  }

export default App
