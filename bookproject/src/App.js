/*import { Container } from "react-bootstrap";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Book from './bookdetail'
import'./App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navigation from "./navbar";
import MyCart from "./cart"
function App(){

    const books = [
      {
          name: "The Alchemist",
          author: " by Paulo Cohelo,Sapna Books",
          price: "₹250",
          crossprice:"  ₹290",
          offer:"   (6% off)",
          imgUrl: "https://th.bing.com/th/id/R.5f1591f5f7380d93bd78c9d56a6fd752?rik=E58zAsQhA6Dvgw&riu=http%3a%2f%2fwww.buyoye.pk%2fwp-content%2fuploads%2f2017%2f04%2fThe-Alchemist-by-Paulo-Coelho.jpg&ehk=bss%2bVR4z1bvvCatje5uvi%2fjhUeeA7UzSov6%2fmd1oO9Q%3d&risl=&pid=ImgRaw&r=0"
      },
      {
          name: "The OutLaw Of Ceader",
          author: "by Lori Connelly ,Sapna Store",
          price: "₹234.76",
          crossprice:"  ₹250",
          offer:"  (2% off)",
          imgUrl: "https://th.bing.com/th/id/R.fbdf9d577208d27d8269788cde91b51b?rik=ySFbdBv46SFpOg&riu=http%3a%2f%2fwww.loriconnelly.net%2fuploads%2f2%2f3%2f2%2f1%2f23214298%2f_51116.jpg%3f209&ehk=ZEP4DRIr3Yvc9DjM0bbZEhTnTLbB9VztTiCiHd8fjtU%3d&risl=&pid=ImgRaw&r=0"
      },
      {
          name: "Harry Potter series",
          author: "by J.K. Rowling",
          price: "₹480",
          crossprice:"  ₹550",
          offer:"  (12% off)",
          imgUrl: "https://m.media-amazon.com/images/P/1408855690.01._SCLZZZZZZZ_SX500_.jpg"
      },
      {
          name: "The Discovery of India",
          author: "by Jawaharlal Nehru",
          price: "₹462",
          crossprice:"  ₹510",
          offer:"  (13% off)",
          imgUrl:"https://images-na.ssl-images-amazon.com/images/I/51JTJUe0-+L._SX343_BO1,204,203,200_.jpg"
      },
      {
          name: "Atomic Habits",
          author: "by James Clear  ",
          price: "₹639",
          crossprice:"  ₹746",
          offer:"  (17% off)",
          imgUrl:"https://images-na.ssl-images-amazon.com/images/I/51S7KOWir7L._SX526_BO1,204,203,200_.jpg"
    },
    {
          name: "As a Man Thinketh",
          author: "by James Allen",
          price: "₹189",
          crossprice:"  ₹221",
          offer:"  (7% off)",
          imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41kHk0jXrNL._SX311_BO1,204,203,200_.jpg"
    },
  {
           name: "The Blue Umbrella ",
           author: "by Ruskin Bond",
           price: "₹462",
           crossprice:"  ₹540",
           offer:"  (25% off)",
           imgUrl:"https://images-na.ssl-images-amazon.com/images/I/515Y-kC7EQL._SX310_BO1,204,203,200_.jpg"
},
{
           name: "The Secret - The Power ",
           author: "by Rhonda Byrne ",
           price: "₹493",
           crossprice:"   ₹570",
           offer:"  (22% off)",
           imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41-n-gkV+0L._SX327_BO1,204,203,200_.jpg"
},
{
           name: "Man's Search For Meaning",
           author: "by Viktor E Frankl ",
           price: "₹160",
           crossprice:"   ₹245",
           offer:"  (30% off)",
           imgUrl:"https://images-na.ssl-images-amazon.com/images/I/415+jozXUNL._SX306_BO1,204,203,200_.jpg"
},
{
          name: "As a Man Thinketh ",
           author: "by James Allen ",
           price: "₹158",
           crossprice:"   ₹260",
           offer:"  (37% off)",
           imgUrl:"https://images-na.ssl-images-amazon.com/images/I/51tiopcLhuS._SX460_BO1,204,203,200_.jpg"
},

  ];
  return (        
        <Container className="container" >
          
           <Navigation /> 
           
          <Row className="row">
          {books.map((book) => {
          
            return (
            
             <Col sm={9} md={5} lg={4}>
      
                <Book book={book}/>  
              </Col>
              );
      
        
          })}
           </Row>
           
           
      </Container>
      
             
      
  );

};


   
     export default App;*/
     import React from 'react'
import Nav from './navbar'
import Card from "react-bootstrap/Card";
import './App.css'
import ItemPage from './ItemPage'
import CartPage from './cart'
import testItems from './bookdetail'

class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state={
            activeTab: 0,
            cart : []
        };

        this.handleTabChange = this.handleTabChange.bind(this);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    handleTabChange = (i) => {
        this.setState({
            activeTab : i
            }
        )
    };

    onAddToCart(item){
        this.setState({
            cart : [...this.state.cart, item]
        });
        alert("Added")
    }

    renderContent(){
            switch(this.state.activeTab){
                default:
                case 0: return <ItemPage items={testItems} onAddToCart = {this.onAddToCart}/>;
                case 1: return <CartPage CartItems={this.state.cart}/>;
            }
    }

    render() {
        return(
            <div className={"App"}>
                <Nav activeTab = {this.state.activeTab} handleTabChange = {this.handleTabChange}/>
                <main className={"App-content"}>
                    {this.renderContent()}
                </main>
            </div>
        )
    }
}

export default App;