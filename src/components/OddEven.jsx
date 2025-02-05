import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getOddOrEven } from "../services/DataService";

const OddEven = () => {
    const [numInpt, setNumInpt] = useState('');
    const [oddEvenOut, setOddEvenOut] = useState('');
    const [displayTxt, setDisplayTxt] = useState('');

    const checkOddEven = async() => {
        setOddEvenOut(await getOddOrEven(numInpt));
    }

    useEffect(() => {
        setDisplayTxt(oddEvenOut);
    },[oddEvenOut]);

    return(
        <>
            <h1 className="text-white text-[96px] flex justify-end mx-[210px]">Odd Or Even</h1>

        <div>
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px]">Please Input Your Number</p>
                : <p className="text-white text-[36px]">{oddEvenOut}</p>
            }
            
            <input className="bg-white inptSize" type="text" placeholder="Number Here..." onChange={(event) => {
                setNumInpt(event.target.value);
            }}/>
        </div>


        <button className="text-white text-[36px] btnCol" onClick={checkOddEven}>Go!</button>
        <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>


        </>
    )
}

export default OddEven