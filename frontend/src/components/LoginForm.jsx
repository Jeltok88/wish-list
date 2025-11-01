import React, { useState } from 'react'
import axios from 'axios'
import '../styles/LoginForm.css'

const LoginForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    try {
      const url = isLogin ? 'http://localhost:8080/api/login' : 'http://localhost:8080/api/register'
      const response = await axios.post(url, formData)
      
      setMessage(`✅ ${response.data.message}`)
      console.log('Ответ сервера:', response.data)
      
      // Очищаем форму после успешной отправки
      setFormData({
        email: '',
        password: '',
        name: ''
      })
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.error || 'Ошибка соединения'}`)
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {!isLogin && (
        <div className="form-group">
          <label>Имя:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required={!isLogin}
          />
        </div>
      )}
      
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Пароль:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit" className="submit-btn">
        {isLogin ? 'Войти' : 'Зарегистрироваться'}
      </button>
      
      {message && <div className="message">{message}</div>}
    </form>
  )
}

export default LoginForm