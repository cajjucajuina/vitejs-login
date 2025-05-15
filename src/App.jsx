import './App.css'
import React, { useState } from 'react';

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
   
        <header >
            <h1>Bem-vindo</h1>
            <p className="subtitle">entre com suas crendenciais para acessar</p>
        </header>
        <form action="/login" method="POST">
            <div className="form-group">
                <label for="email">email </label>
                <div className="input-group">
                    <input type="email" id="email" name="email" placeholder=" seu email ou nome de usuario" required
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
        
  
    </> )
  }

export default App
