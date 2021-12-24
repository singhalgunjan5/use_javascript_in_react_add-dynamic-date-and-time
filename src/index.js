
import React from 'react'
import ReactDom from 'react-dom';

const currDate= new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();
ReactDom.render(
<>
<br></br>
<p>
<h1>Hello My name is gunjan.
<br></br>
<br></br>
This is my second project on react.
<br></br>
<br></br>
Purpose is to show Dynamic Date and Time </h1>
</p>
<h1>
<p>Current Date is = {currDate} </p>
<p>Current Time is = {currTime} </p>
</h1>
</>,
document.getElementById('root')
);

