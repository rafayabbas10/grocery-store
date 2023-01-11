import React from 'react'
import './Categorypage.css'
import Footer from './Footer'
import Header from './Header'
import Headline from './Headline'
import Navbar from './Navbar'
import Onsaleitem from './Onsaleitem'

function Categorypage() {
    return (
        <>
            <Header />
            <Navbar />
            <Headline />
            <div className="category-page">
                <h1>Fruits & Vegetables</h1>
                <div className="spacer">
                    <button class="button">
                        <div className="gift">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </div>
                        <span className="calltoact">Fliter</span>
                    </button>
                </div>
                <div className="contents">
                    <div className="list">
                        <button class="button2">
                            <span className="calltoact2">Vegetables</span>
                            <div className="gift">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>


                            </div>
                        </button>
                        <button class="button2">
                            <span className="calltoact2">Fruits</span>
                            <div className="gift">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>


                            </div>
                        </button>
                        <button class="button2">
                            <span className="calltoact2">Potatoes & Onion</span>
                            <div className="gift">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>


                            </div>
                        </button>
                        <button class="button2">
                            <span className="calltoact2">Bear</span>
                            <div className="gift">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>


                            </div>
                        </button>
                        <button class="button2">
                            <span className="calltoact2">Sponge</span>
                            <div className="gift">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>


                            </div>
                        </button>
                        <button class="button2">
                            <span className="calltoact2">Bags</span>
                            <div className="gift">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>


                            </div>
                        </button>
                    </div>
                    <div className="content">
                        <div className="wrap">
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                        </div>
                        <div className="wrap">
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                        </div>
                        <div className="wrap">
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                        </div>
                        <div className="wrap">
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                        </div>
                        <div className="wrap">
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                        </div>
                        <div className="wrap">
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                            <Onsaleitem />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Categorypage