import React, {Component} from 'react';
import ItemList from '../components/ItemList';
import styled from 'styled-components';
import ItemForm from '../components/ItemForm';
const GroceryItems=[
    {
        name:"Tamato",
        quantity:1,
        amount:20
    },
    {
        name:"Potato",
        quantity:1,
        amount:10
    },
    {
        name:"Onion",
        quantity:2,
        amount:25
    },
    {
        name:"Apple",
        quantity:2,
        amount:50
    },
    {
        name:"mango",
        quantity:1,
        amount:5
    }
]

const Container = styled.div`
display:flex;
margin-left:auto;
margin-right:auto;
flex-direction:column;
width:750px;
alain-items:center;
table{
    width:700px;
    td {
        border:1px solid black;
    }
}

`

class Home extends Component{
    
    constructor(props){
        super(props);
        this.state={
            items:GroceryItems
        }
    }
    handleItemPush=(item)=>{
        this.setState({
           items: [
            ...this.state.items,
            item
        ]
    })
    }
    render(){
        const {items}= this.state;
    return (
        <Container>
            <h1>Grocery List</h1>
            <ItemForm pushItems={this.handleItemPush}/>
            <ItemList items={items}/>
        </Container>
    )}
}

export default Home;