
import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ex.css'
const MyComponent = () => {
    const [ value1, setValue1 ] = React.useState(25);
    const [ value2, setValue2 ] = React.useState(25);
    const [ value3, setValue3 ] = React.useState(25);
    const result=(setValue1,setValue2,setValue3)=>{
      return(value1*value2*value3/5000)
    }
  return (
    <div id="ex">
    <Form>
     <Form.Group as={Row}>
     <Form.Label>Length(cm):</Form.Label>
       <Col xs="2">
         <Form.Control value={value1}/>
       </Col>
       <Col xs="2">
         <RangeSlider
           value={value1}
           onChange={e => setValue1(e.target.value)}
            variant='dark'
         />
       </Col>
     </Form.Group>
     <Form.Group as={Row}>
     <Form.Label>Width(cm):</Form.Label>
       <Col xs="2">
         <Form.Control value={value2}/>
       </Col>
       <Col xs="2">
         <RangeSlider
           value={value2}
           onChange={e => setValue2(e.target.value)}
            variant='dark'
         />
       </Col>
     </Form.Group>
     <Form.Group as={Row}>
     <Form.Label>Height(cm):</Form.Label>
       <Col xs="2">
         <Form.Control value={value3}/>
       </Col>
       <Col xs="2">
         <RangeSlider
           value={value3}
           onChange={e => setValue3(e.target.value)}
            variant='dark'
         />
       </Col>

     </Form.Group>
     <div>Package volume:{result()}</div>
     </Form>
     </div>
  );

};

export default MyComponent
