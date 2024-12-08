//useRef hook, used to read the data from input
import { useRef } from "react";
//navigation between components based on events
import { useNavigate } from "react-router-dom";
//import axios
//axios used to make api calls
import axios from "axios";
const Login = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const login_fn = async () => {
        const res = await axios.post(`http://localhost:8081/login`, { "username": ref1.current.value, "password": ref2.current.value });
        const { data } = res;
        const { login } = data;
        login == "success" ? navigate("/dashboard") : navigate("/error");

    }
    return (

        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                {/* Header Image */}
                <img
                    src="../header.png"
                    alt="Header"
                    style={{ marginBottom: '20px', borderRadius: '10px',width:'70%' }}
                />

                {/* Login Form */}
                <fieldset style={{
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                    textAlign: 'center', // Center aligns the button inside
                }}>
                    <legend>LOGIN</legend>
                    <input type="text" ref={ref1} placeholder="Enter user name" style={{ marginBottom: '10px', padding: '5px', width: '100%' }} />
                    <br />
                    <input type="password" ref={ref2} placeholder="Enter password" style={{ marginBottom: '10px', padding: '5px', width: '100%' }} />
                    <br />
                    {/* Centered Login Button */}
                    <button
                        onClick={login_fn}
                        style={{ padding: '5px', margin: '0 auto', display: 'block' }}
                    >
                        Login
                    </button>
                </fieldset>
            </div>
        </>);
}
export default Login;