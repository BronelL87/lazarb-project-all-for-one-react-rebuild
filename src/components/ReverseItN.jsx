import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { reverseNums } from "../services/DataService";

const ReverseItN = () => {
    const [numChainInpt, setNumChainInpt] = useState('');
    const [getReverseNums, setGetReverseNums] = useState('');
    const [displayTxt, setDisplayTxt] = useState('');

    const fetchReverseNums = async() => {
        setGetReverseNums(await reverseNums(numChainInpt))
    }

    useEffect(() => {
        setDisplayTxt(getReverseNums);
    },[getReverseNums]);
    return(
        <>
           
            <h1 className="text-white text-[96px] flex justify-end mx-[210px]">Reverse It (Num)</h1>
        
        <div>
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px]">Please input any chain of numbers</p>
                : <p className="text-white text-[36px]">{getReverseNums}</p>
            }
            
            <input className="bg-white inptSize" type="text" placeholder="Numbers Here..." onChange={(event) => {
                setNumChainInpt(event.target.value);
            }}/>
        </div>


        <button className="text-white text-[36px] btnCol" onClick={fetchReverseNums}>Go!</button>
        <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>

        </>
    )
}

export default ReverseItN