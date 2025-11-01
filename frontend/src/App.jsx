import React, { useState } from 'react'
import LoginForm from './components/LoginForm.jsx'
import './styles/LoginForm.css'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="app">
      <div className="container">
        <h1>Wish List</h1>
        <div className="auth-tabs">
          <button 
            className={`tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Вход
          </button>
          <button 
            className={`tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Регистрация
          </button>
        </div>
        <LoginForm isLogin={isLogin} />
      </div>
    </div>
  )
}

export default App