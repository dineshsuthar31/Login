import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

function Login() {

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);

    // console.log(inpval);
    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        // console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getuserarr = localStorage.getItem("userregistration");
        console.log(getuserarr);

        const { email, password } = inpval;
        if (email === "") {
            alert("email field is requred")
        }
        else if (!email.includes("@")) {
            alert("Please enter valid email adress")
        }
        else if (password === "") {
            alert("password field is requred")
        }
        else if (password.length < 5) {
            alert("password length greater five")
        }
        else {
            if (getuserarr && getuserarr.length) {
                const userdata = JSON.parse(getuserarr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });
                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfully");
                }
            }
        }
    }
    return (
        <>
            <div className="container mt-4">  hr@jstechno.com
                <section>
                    <div className="form mt-6">
                        <h3 className='text-center col-lg-4'>SignIn</h3>

                        <Form>

                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" onChange={getdata} name='email' placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3  col-lg-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={getdata} name='password' placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={addData} className='col-lg-4'>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/">SignUp</NavLink></span></p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login