import React from 'react'
import {Row,Col,Card,CardBody,CardTitle,Form,FormGroup,Label,Input,FormFeedback,Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'


class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            gender:'',
            pswd:'',
            rPswd:'' };
      }

    handleSubmit = event => {
        event.preventDefault();
        // alert('A name was submitted: ' + this.state.value);
        console.log('Model: '+JSON.stringify(this.state));
    }

    handleChange = (e) => {
        this.state[e.target.name]=e.target.value
    }

    render(){
        return(
            <div className="Boxx">
            <Row>
                <Col md="3"></Col>
                <Col md="6">
                <Card>
                    <CardBody>
                    <CardTitle className="App"><h1>Registration Form</h1></CardTitle>
                    <hr/>
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
                            <Input type="password" name="rPswd" id="forRPswd" onChange={this.handleChange} value={this.state.value} placeholder="Repeat Your Secret Password" />
                        </FormGroup>
                        <Button color="primary" className="BtnCntl" onClick={this.handleSubmit} >Register</Button>
                    </Form>
                    </CardBody>
                </Card>
                </Col>
                <Col md="3"></Col>
            </Row>
            </div>
        );
    }
}

export default Register