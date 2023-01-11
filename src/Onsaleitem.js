import React from 'react'
import './Onsaleitem.css';
import breadpic from '../src/images/bread.png'

function Onsaleitem() {
    return (
        <div className="box">
            < img src={breadpic} className="img" />
            <div className='category'>Fruit & Vegetables</div>
            <div className='itemtitle'>Clementin Luxary 1kg</div>
            <div className="attrib">
                <span>100g</span>
                <span>Spain</span>
            </div>
            <div className="money">
                <div>
                    <div>49</div>
                    <span>253 - 49%</span>
                </div>
                <span>SEK 49/kg</span>
            </div>
            <button class="btn">
                <div className="gft">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>

                </div>
            </button>
        </div>
    )
}

export default Onsaleitem