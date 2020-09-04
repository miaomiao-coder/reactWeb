
import React from 'react'
// import styled from 'styled-components'
import 'antd/dist/antd.css';
import './index.css';
import { Input, Button } from 'antd';
class Login extends React.Component {
    render() {
        return (
        <div className="login-page">
            <div className="container">
                <div className="animated animated-content">

<text>欢迎登录后台</text>
                    <Input className="user-input" placeholder="请输入用户名" />
                    <Input.Password className="user-input" placeholder="请输入密码" />
                        <Button className="btn" type="primary" block>登录</Button>
                </div>
            </div>
        </div>)
    }
}
export default Login