import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContextProvider';

function FilterData() {

    const { setLh } = useContext(CartContext);

    return (
        <>
            <div>
                <button disabled style={{ padding: "7px 10px", border: "none", backgroundColor: "white", margin: "5px", borderRadius: "10px" }} >Sort by Cost {">>"}</button>
                <button style={{ padding: "7px 10px", border: "1px solid #008ECC", cursor: "pointer", backgroundColor: "white", margin: "5px", color: "#008ECC" }} onClick={() => setLh(true)}>Low to High</button>
                <button style={{ padding: "7px 10px", border: "1px solid #008ECC", cursor: "pointer", backgroundColor: "white", margin: "5px", color: "#008ECC" }} onClick={() => setLh(false)}>High to Low</button>
            </div>


        </>
    );
}
export { FilterData }