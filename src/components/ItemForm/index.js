import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
display:flex;
width:700px;
div{
    width:20%;
    display:flex;
    flex-direction:column;
    input{
        padding:5px;
        font-size:15px;
    }
}
.name-input{
    width:50%;
}
.btn-div{
    margin-top:12px;

  button{
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    }
    .button1 {
        background-color: white; 
        color: black; 
        border: 2px solid #008CBA;
      }
      
      .button1:hover {
        background-color: #008CBA;
        color: white;
      }
}
`
class ItemForm extends Component {

    constructor (props){
        super (props);
        this.state={
            name:'',
            quantity:0,
            amount:0
        }
    }

    handleChange=(e)=>{
            this.setState({
            ...this.state,         
            [e.target.name]:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault(); 
        this.props.pushItems(this.state);
    }
    render (){
        const {name, quantity, amount}= this.state;
    return(
        <div>
            <Form onSubmit={this.handleSubmit}>
                <div className="name-input">
                    <label htmlFor="name">Enter Name:</label>
                    <input name="name" placeholder="Enter Item Name" type="text" value={name} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input name="quantity" placeholder="Quantity" type="number" value={quantity} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input name="amount" placeholder="amount" type="number" value={amount} onChange={this.handleChange}/>
                </div>
                <div className="btn-div">
                <button type="submit" className="button1">Add Item</button>

                </div>
             </Form>
        </div>
    )
    }
}

export default ItemForm