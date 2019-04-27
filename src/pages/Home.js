import React, {Component} from 'react';
import ItemList from '../components/ItemList';
import styled from 'styled-components';
import ItemForm from '../components/ItemForm';
import Loading from '../components/loading/index';
import axios from 'axios';

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
            items:[],
            loaded:false
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
        const {items,loaded}= this.state;
    return (
        <Container>
            <h1>Grocery List</h1>
            {!loaded?<Loading/>:

            <div>
            <ItemForm pushItems={this.handleItemPush}/>
            <ItemList items={items}/>
            </div>}
        </Container>
    )}
    
    componentDidMount()
    {
        
     axios.get('http://localhost:3003/api/list')
     .then(({data})=> {
                  console.log({ data } );
                

                  this.setState({
                    items: data,
                    loaded: true
                })
        })
        .catch((error) =>{
            console.log(error);
        })
    }
}

export default Home;