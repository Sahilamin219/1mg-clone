import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react'
import './login.css'
import image from './upachar_login.png';


class Login extends Component {

    state = {
      passwordVisiblity:'password',
      open: true,
      emailOrMobile:'',
      password:''
    }

    close = () => this.props.history.push('/')

    handleInputChange = (e) => {
      this.setState({[e.target.id]:e.target.value})
    }

    handlepasswordVisiblity = () => this.setState( ({passwordVisiblity}) => ({
      passwordVisiblity: passwordVisiblity === 'text' ? 'password' : 'text'
    }))

    render() {
        return (
            <Modal open={this.state.open} dimmer='blurring' centered={false}
            onClose={this.close}>
              <Modal.Content image>
                <Image size='medium' src={image} className='hide-on-small-and-down' />
                <div className='siginForm'>
                <Form>
                  <h3>Login</h3>
                  <Form.Field>
                    <label>Email or Mobile Number</label>
                    <input id='emailOrMobile' placeholder='Email / Mobile Number' />
                  </Form.Field>

                  <Form.Field>
                    <label>Password</label>
                    <input id='password' type={this.state.passwordVisiblity} placeholder='password' />
                    <span className="password__show" onClick={this.handlepasswordVisiblity}>{this.state.type === 'text' ? 'Hide' : 'Show'}</span>
                  </Form.Field>

                  <Form.Field>
                    <Checkbox label='Keep Me Logged In' />
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>
                </div>
              </Modal.Content>
            </Modal>
          )
    }
}

export default Login