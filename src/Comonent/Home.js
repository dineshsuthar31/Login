import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

function Home() {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
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
        // e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            alert("name field is requred")
        }
        else if (email === "") {
            alert("email field is requred")
        }
        else if (!email.includes("@")) {
            alert("Please enter valid email adress")
        }
        else if (date === "") {
            alert("date field is requred")
        }
        else if (password === "") {
            alert("password field is requred")
        }
        else if (password.length < 5) {
            alert("password length greater five")
        }
        else {
            console.log("Data added seccesfully");

            localStorage.setItem("userregistration", JSON.stringify([...data, inpval]));
        }
    }

    return (
        <>
            <div className="container mt-4">
                <section>
                    <div className="form mt-6">
                        <h3 className='text-center col-lg-4'>SignUp</h3>

                        <Form>
                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" onChange={getdata} name='name' placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" onChange={getdata} name='email' placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" onChange={getdata} name='date' />
                            </Form.Group>

                            <Form.Group className="mb-3  col-lg-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={getdata} name='password' placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={addData} className='col-lg-4'>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home