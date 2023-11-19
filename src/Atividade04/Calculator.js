import './Calculator.css';
import React, { useState } from 'react';

function Calculator()
{

    const [auxPreview, setAuxPreview] = useState('');
    const [preview, setPreview] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('0');

    function numberButton(numberSelect)
    {
        if(operator === '') setResult('');

        setAuxPreview(auxPreview+numberSelect)

    };

    function operationButton(operatorClick)
    {   

        if(auxPreview !== '')
        {
            if(operator !== '') calculateOperation();   
            else setResult(parseFloat(auxPreview));


            setOperator(operatorClick);  
            setPreview(preview + auxPreview + operatorClick);          
            setAuxPreview('');

        }

    }

    function calculateOperation()
    {

        const value = parseFloat(auxPreview);

        if(operator === '+') setResult(result+value);
        else if(operator === '/') setResult(result/value);
        else if(operator === '-') setResult(result-value);
        else if(operator === '*') setResult(result*value);
        
    }

    function equalButton()
    {
    
        calculateOperation();
        setOperator('');
        setPreview('');
        setAuxPreview('');

    }

    function clearButton()
    {
        setOperator('');
        setPreview('');
        setAuxPreview('');
        setResult(0);
    }

    function convertButton()
    {
        setAuxPreview(-parseFloat(auxPreview));
    }

    function percentageButton()
    {
        const value = parseFloat(auxPreview);
        setAuxPreview(value / 100);
 
    }

    return (
        <div className='Calculator-body'>
            <div className='screen'>
                <div className='preview'>{preview}</div>
                <div className='results'>{result + operator + auxPreview}</div>
            </div>

            <div className='Button-body'>
                <button onClick={() => clearButton()}>AC</button>
                <button onClick={() => convertButton()}>+/-</button>
                <button onClick={() => percentageButton('%')}>%</button>
                <button onClick={() => operationButton('/')}>/</button>
                <button onClick={() => numberButton('7')}>7</button>
                <button onClick={() => numberButton('8')}>8</button>
                <button onClick={() => numberButton('9')}>9</button>
                <button onClick={() => operationButton('*')}>X</button>
                <button onClick={() => numberButton('4')}>4</button>
                <button onClick={() => numberButton('5')}>5</button>
                <button onClick={() => numberButton('6')}>6</button>
                <button onClick={() => operationButton('-')}>-</button>
                <button onClick={() => numberButton('1')}>1</button>
                <button onClick={() => numberButton('2')}>2</button>
                <button onClick={() => numberButton('3')}>3</button>
                <button onClick={() => operationButton('+')}>+</button>
                <button onClick={() => numberButton('0')}>0</button>
                <button onClick={() => numberButton('.')}>,</button>
                <button onClick={() => equalButton()}>=</button>
            </div>
        </div>
    );
}

export default Calculator;