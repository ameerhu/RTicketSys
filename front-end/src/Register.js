import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";
import './Register.css'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnStyle:{disabled:false},
            name: '',
            email: '',
            gender: '',
            pswd: '',
            rPswd: ''
        };
        this.onChange = this.onChange.bind(this)
        this.recaptchaRef = React.createRef();
    }
    // recaptchaRef = React.createRef();
    onChange(value) {
        console.log("Captcha value:", value);
        document.getElementById('btnSbmit').disabled=false;
    }

    componentDidMount() {
        document.getElementById('btnSbmit').disabled=true;
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        // alert('A name was submitted: ' + this.state.value);
        try{
            const recaptchaValue = this.recaptchaRef
            console.log('cap val: '+this.recaptchaRef.current.value);
        }catch(err) {console.log('err: '+err)} 
        console.log('Model: ' + JSON.stringify(this.state));
    }

    handleChange = (e) => {
        this.state[e.target.name] = e.target.value
    }

    render() {
        return (
            <div className="Boxx">
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <CardTitle className="App"><h1>Registration Form</h1></CardTitle>
                                <hr />
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label for="forName">Enter your Name:</Label>
                                        <Input type="text" name="name" onChange={this.handleChange} value={this.state.value} id="forName" placeholder="Enter Your Name"></Input>
                                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="forEmail">Enter your Email:</Label>
                                        <Input type="email" name="email" onChange={this.handleChange} value={this.state.value} id="forEmail" placeholder="Enter Your Email"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="forGender">Choose your Gender:</Label>
                                        <Input type="select" name="gender" onChange={this.handleChange} value={this.state.value} id="forGender" placeholder="Choose Your Gender">
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="forPswd">Password</Label>
                                        <Input type="password" name="pswd" id="forPswd" onChange={this.handleChange} value={this.state.value} placeholder="Enter Your Secret Password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="forRPswd">Password</Label>
                                        <Input type="password" onClick={this.onChange} name="rPswd" id="forRPswd" onChange={this.handleChange} value={this.state.value} placeholder="Repeat Your Secret Password" />
                                    </FormGroup>
                                    <ReCAPTCHA
                                        // ref={(r) => {this.recaptcha = r; console.log('q g'+r)}}
                                        ref={(r)=>{
                                            console.log('reference: ' + r); 
                                            this.recaptchaRef = r; 
                                            console.log('assign: '+this.recaptchaRef.current)}}
                                        data-theme="dark"
                                        render="explicit"
                                        sitekey="6Ld2-B4TAAAAADUwif9DcmyeZ60LO2lIO8Q2JwXT"
                                        onChange={this.onChange}
                                    />
                                    <br/>
                                    {/* <Button style={this.state.btnStyle} id='btnSbmit' color="primary" className="BtnCntl" onClick={this.handleSubmit} >Register</Button> */}
                                    <Button id='btnSbmit' disabled color="primary" className="BtnCntl" onClick={this.handleSubmit} >Register</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
                <Col md="3"></Col>
            </div>
        );
    }
}

export default Register