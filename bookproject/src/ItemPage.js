import React from 'react'
import './ItemPage.css'
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class ItemPage extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className={"ItemsContainer"}>
                {this.props.items.map(item => (
                    <Item key = {item.id} item ={item} onAddToCart = {() => this.props.onAddToCart(item)} />
                ))}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

class Item extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
            
             <div className={"ItemContainer"}>
                <div className={"ItemImage"}>
                    <img src={this.props.item.image}  alt={"product"} width={120}/>
                </div>
                 
                <div className={"ItemName"}>
                    {this.props.item.name}
                </div>
                
                <div className={"ItemAuthor"}>
                    {this.props.item.author}
                </div>

                

                <div className={"ItemCrossPrice"}>
                     {this.props.item.crossprice}
                </div>


                <div className={"ItemOffer"}>
                    {this.props.item.offer}
                </div>

                <Button className={"addToCart"} onClick={this.props.onAddToCart}>
                    Add To Cart
                </Button>

            
            </div>
            </Container>
        
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

export default ItemPage;