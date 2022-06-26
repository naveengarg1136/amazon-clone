import React from 'react'
import "./subtotal.css"; 
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../contextAPI/StateProvider';
import { getBasketTotal } from '../contextAPI/reducer';

function Subtotal () {
  const [{basket},dispatch]= useStateValue();

  return (
    <div className='subtotal'>
        <h2>Subtotle here</h2>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button> Procced to Buy</button>
      
    </div>
  )
}

export default Subtotal