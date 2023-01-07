import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div class="navbar">
            <a href="#home">Home
            </a>
            <div class="dropdown">
                <button class="dropbtn"><div class="navbar-brand"><span className="home">Categories</span>
                    <div className='vect'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div></div>
                </button>
                <div class="dropdown-content">

                    <div class="row">
                        <div class="column">
                            <a href="#">Fruit & Vegetables</a>
                            <a href="#">Dairy, cheese & juice</a>
                            <a href="#">Bread & bakery</a>
                            <a href="#">Meat & Charcuterie</a>
                            <a href="#">Drink</a>
                            <a href="#">Pantry</a>
                            <a href="#">Fish Shellfish</a>
                            <a href="#">Home & Household</a>
                        </div>
                        <div class="column">
                            <a href="#">Ready meals & Snacks</a>
                            <a href="#">Ice cream, sweets & snacks</a>
                            <a href="#">Baby food & accessories</a>
                            <a href="#">Pharmacy, Hygiene & Health</a>
                            <a href="#">Spices & Flavourings</a>
                            <a href="#">Pet food & accessories</a>
                            <a href="#">Kiosk & Newspapers</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><div class="navbar-brand"><span className="home">Offers</span>
                    <div className='vect'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div></div>
                </button>
                <div class="dropdown-content2">

                    <div class="row">
                        <div class="column1">
                            <a href="#">Extra prices</a>
                            <a href="#">Bargain Corner</a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><div class="navbar-brand"><span className="home">More</span>
                    <div className='vect'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div></div>
                </button>
                <div class="dropdown-content3">
                    <div class="row">
                        <div class="column3">
                            <h3 className="title">Explore</h3>
                            <a href="#">New in the shop</a>
                            <a href="#">Organic goods</a>
                            <a href="#">Goods thar suit me</a>
                            <a href="#">Prescription</a>
                        </div>
                        <div class="column3">
                            <h3 className="title">Inspiration</h3>
                            <a href="#">Health</a>
                            <a href="#">Everyday recipes</a>
                            <a href="#">Weekend, party & holiday</a>
                            <a href="#">Tips and tricks</a>
                            <a href="#">Companies and associations</a>
                            <a href="#">Recipe collections</a>
                            <a href="#">Collaborations</a>
                            <a href="#">All articles</a>
                        </div>
                        <div class="column3">
                            <a href="#"></a>
                            <a href="#">Customer service</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#home">For companies
            </a>
            <span className="div"></span>
            <a href="#home" className="neucust">New Customer
            </a>
            <a href="#home">Sign In
            </a>
        </div>
    )
}

export default Navbar