import './Contador.css';
import React, {useState} from 'react';

function Contador()
{
    const [countWoman, setCountWoman] = useState(0);
    const [countMan, setCountMan] = useState(0);
    
    function resetCount()
    {
        setCountMan(0);
        setCountWoman(0);
    } 

    return(
        <>

            <div className='total-count'>
                <h1>Total</h1>
                <p>{countWoman+countMan}</p>
            </div>

            <div className='woman-man-count'>

                <div className='count-user'>
                    <img src='https://m.media-amazon.com/images/I/31Cd9UQp6eL.jpg'></img>
                    <div className='button'>
                        <button className='sum-button' onClick={()=>setCountWoman(countWoman+1)}>+</button>
                        <button className='dec-button' onClick={()=>setCountWoman(countWoman-1)}>-</button>
                    </div>
                    <h1>Woman</h1>
                    <div>
                        <p>{countWoman}</p>
                    </div>
                </div>
                
                <div className='reset-button'>
                    <button onClick={()=>resetCount()}>Reset</button>
                </div>

                <div className='count-user'>
                    <img src='https://m.media-amazon.com/images/I/41jLBhDISxL._SX300_SY300_QL70_FMwebp_.jpg'></img>
                    <div className='button'>
                        <button className='sum-button' onClick={()=>setCountMan(countMan+1)}>+</button>
                        <button className='dec-button' onClick={()=>setCountMan(countMan-1)}>-</button>
                    </div>
                    <h1>Man</h1>
                    <div>
                        <p>{countMan}</p>
                    </div>
                </div>

            </div>
            

        </>

    );
}

export default Contador;