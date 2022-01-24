import React from 'react'
import HeaderWhite from '../../Components/LandingPages/HeaderWhite';
import { Tabs } from 'antd';
import { Form } from 'react-bootstrap';
import 'antd/dist/antd.dark.min.css';
import { Link } from 'react-router-dom';

function Signup() {
    function callback(key) {
        console.log(key);
    }
    return (
        <div className="authenticationPage">
            <HeaderWhite />
            <div id="page-content" className="container signUpPage">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5 col-xxl-4">
                        <div>
                            <h1 className="h1">Create Account</h1>
                            <p className="subHead">Register with your email address</p>
                            <div className="mt-5">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        {/* <Form.Label>Password</Form.Label> */}
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <p className="referralCode">REFERRAL ID <span>(OPTIONAL)</span></p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="su">
                                        <Form.Check type="checkbox" label="Subscribe to email update" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 d-flex checkBoxWithLink" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I have read and agree to Artchive’s" /><a href="#" >Terms of Service</a>
                                    </Form.Group>
                                    <div className="row justify-content-center mt-5">
                                        <div className="col-12 col-md-6 col-lg-5 text-center">
                                            <button className="BuyNow btn">Create Account</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-2">
                                        <div className="col-12 col-md-7 col-lg-6 text-center">
                                            <p className="subHead">Already Registered ? <Link to={'/login'}>Login</Link></p>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Signup
