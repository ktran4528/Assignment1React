import { useState } from 'react'

import './App.css'
import View from './View'
import './Login.css'
import { Button, Form } from 'react-bootstrap'

function App() {
  const [auth,setAuth] = useState('auth')
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const authenticateUser = async () => {
    try {
      //
      console.log(email)
      console.log(password)
      //verify the credentials (just hardcoding here)
      if (email === 'john' && password === '123') {
        setAuth('authenticated'); // update the state
        console.log(auth);
      }
    } catch (e) { //print the error
      console.log(e);
    }
  
  };

  return (
    <div className="App">
      {auth !== 'authenticated' 
        ? <div className ="container">
            <Form >
              
              <Form.Group  style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}size = "lg" >
                <Form.Label style={{padding:'25px'}}>Email:</Form.Label>
                <Form.Control className="text-area" type="text" name="email" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}size = "lg" >
                <Form.Label style={{padding:'25px'}}>Password:</Form.Label>
                <Form.Control  className="text-area"type="password" name="password" id="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Button  className="custom-button"size = "lg" variant="primary" type="Button" onClick={authenticateUser}>
                Login
              </Button>
            </Form>

        </div>        
        : <View auth={auth} email={email} />
      }
    </div>

  );


}

export default App
