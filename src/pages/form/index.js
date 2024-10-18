import "./form.css"
import logo from "../../img/purple_logo_design_2-removebg-preview.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
    const formInitialState = {
        Username: "",
        email: "",
        password: "",
        country: "",
        email1: "",
        password1: "",
    };
    const [formControl, setFormControl] = useState(formInitialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormControl(formInitialState);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormControl((prev) => ({ ...prev, [name]: value }));
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="logo">
            <img src={logo} alt="logo" onClick={handleClick} />
            <div className="form">
                <div className="container">
                    <div className="main">
                        <input type="checkbox" id="chk" aria-hidden="true" />
                        <div className="signUp">
                            <form onSubmit={handleSubmit}>
                                <label for="chk" aria-hidden="true"> Sign Up</label>
                                <input
                                    type="text"
                                    value={formControl.Username}
                                    name="Username"
                                    onChange={handleOnChange}
                                    placeholder="Username"
                                    required=""
                                />
                                <input
                                    type="email"
                                    value={formControl.email1}
                                    name="email1"
                                    onChange={handleOnChange}
                                    placeholder="Email"
                                    required=""
                                />
                                <input
                                    type="password"
                                    value={formControl.password1}
                                    name="password1"
                                    onChange={handleOnChange}
                                    placeholder="Password"
                                    required=""
                                />

                                <button type="submit">Sign Up</button>
                            </form>

                        </div>
                        <div className="login">
                            <form>
                                <label for="chk" aria-hidden="true"> Login</label>
                                <input
                                    type="email"
                                    value={formControl.email}
                                    name="email"
                                    onChange={handleOnChange}
                                    placeholder="Email"
                                    required=""
                                />
                                <input
                                    type="password"
                                    value={formControl.password}
                                    name="password"
                                    onChange={handleOnChange}
                                    placeholder="Password"
                                    required=""
                                />
                                <input
                                    type="text"
                                    value={formControl.country}
                                    name="country"
                                    onChange={handleOnChange}
                                    placeholder="Country"
                                    required=""
                                />
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;

