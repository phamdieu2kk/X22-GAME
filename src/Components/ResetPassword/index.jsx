
import Slider from "../Slider";
import FooterList from "../FooterList";
import { NavLink , useNavigate } from "react-router-dom";
import {Button,   Input } from "antd";
import React, { useState } from 'react';
import axios from "axios";




const ResetPassword = () => {


    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://103.30.10.141:3000/user/resetpassword",
                { password }
            );

            const data = response.data;
            alert(data?.message);
            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.message ?? error.response?.data);
        }
    };

    return (
    <>
    <div>
    <Slider/>
    <div>
                <div className="title-home">
                    <NavLink to={"/login"} title="đặt lại mật khẩu">
                    Đăng Nhập
                    </NavLink>
                    <span>{">"}</span>
                    <label>Đặt lại mật khẩu </label>
                </div>
            </div>


            <div className="content form-user">
                <div className="container">
                    <div>
                        <h1 style={{ fontWeight: "700" }}>Đặt lại mật khẩu</h1>
                    <form>
                    <Input
                            className="input-username"
                            type="password"
                            placeholder="Mật Khẩu"
                            required
                            value={password}
                            onChange={(e) =>
                                setPassword( e.target.value )
                            }/>
                        <Button
                                className="btn-login"
                                type="primary"
                                onClick={handleReset}>
                                <span style={{ fontSize: "17px" }}>
                               Xác Nhận{" "}
                                </span>
                            </Button>
                            </form>
                            </div>
                            </div>
                            </div>












       
    </div>
    <FooterList />
    </>
  )
}

export default ResetPassword