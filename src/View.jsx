//
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Thankyou from './Thankyou';
import { useState } from 'react'
function View(props) {
    const [comments, setComments] = useState('')
    const [nextView, setNextView] = useState(false)
    // read the info from props, coming from the ancestor component
    console.log(props.auth)
    //
    const goNext = () => {
        setNextView(true)
    }

    return (
        <>
            {nextView ? (
                <Thankyou email={props.email} comments={comments} />
            ) : (
                <div>
                    <Form onSubmit={goNext}>

                        <Form.Group style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} size="lg" >
                            <Form.Label style={{padding:'25px', width:'100%'}}>Course Code: </Form.Label>
                            <Form.Control type="text" name="courseCode"></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} size="lg" >
                            <Form.Label style={{padding:'25px',width:"100%"}}>Course Name</Form.Label>
                            <Form.Control type="text" name="courseName"></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} size="lg" >
                            <Form.Label style={{padding:'25px'}}>Email: </Form.Label>
                            <Form.Control type="text" name="email" value={props.email}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} size="lg" >
                            <Form.Label style={{padding:'25px',width:'100%'}}>Your Comments: </Form.Label>
                            <Form.Control style={{width:"100%"}}as="textarea" rows='5' name="comments" onChange={e => setComments(e.target.value)}></Form.Control>


                        </Form.Group>
                        <Form.Group style={{paddingTop:"20px"}}>
                            <Button size="lg" variant="primary" className="custom-button" type='submit'>
                                Submit
                            </Button>
                        </Form.Group>

                    </Form>
                </div>
            )}
        </>

    );
}
//
export default View;
