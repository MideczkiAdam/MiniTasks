import { useState } from "react";


function CardBtn(){

    const [amount, setamount] = useState(0)

    const minus = () => {setamount(prev => prev-1)}
    const plus = () => {setamount(prev => prev+1)}

    return(
        <>
        {amount === 0 ? <button onClick={plus}>"Add To Cart"</button> :
            <div>
                <button onClick={minus}>-</button>
                {amount}
                <button onClick={plus}>+</button>
            </div>
        }
        </>
    )
}

export default CardBtn