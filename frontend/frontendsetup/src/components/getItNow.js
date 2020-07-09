import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class getItNow extends Component {
    constructor(props){
    super(props);
    this.state = {
     	open: false,
    }
   }

    openMenu = () => {
       this.setState({
        	...this.state,
            open: true
       });

       console.log("ahhahaha");
    }
    
    closeMenu = () => {
       this.setState({
        	...this.state,
        	open: false
       });
    }

    render() {
        return (
            <>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={this.openMenu}>
                            &#9776;
                            HIT ME 
                        </button>

                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">Signin</a>
                    </div>
                </header>
                <aside className= {`sidebar ${this.state.open ? 'open' : ''}`}>
                    <h3>Shopping Categories</h3>
                    <button className="sidebar-close-button" onClick={this.closeMenu}>x</button>
                    <u1>
                        <li>
                            <a href="index.html">Toilet Paper</a> 
                        </li>

                        <li>
                            <a href="index.html">Pet Food</a>
                        </li>
                        <li>
                            <a href="index.html">Rice</a>
                        </li>

                    </u1>
                    
                </aside>
                <main className="main">
                    <div className="cotent">
                    <ul className="products">
                        <li>
                            <div className="product">
                            <img className="image" src="https://cdn.shopify.com/s/files/1/0012/8440/7394/products/kleenex-small-roll-toilet-tissue-kleenex-12818116640866_450x450.jpg?v=1580212623" alt="product"/>
                                <div className="product-name"> </div>
                                <a href="product.html">Toilet Paper</a>
                                <div className="product quantity">
                                    We are short of toilet paper right now!
                                    quantity:3
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </main>
            </div>



            </>

        );
    }
}

export default getItNow;
   