import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { reverseAlph } from "../services/DataService";

const ReverseItA = () => {
    const [anyInpt, setAnyInpt] = useState('');
    const [getReverse, setGetReverse] = useState('');
    const [displayTxt, setDisplayTxt] = useState('');

    const fetchReverseA = async() => {
        setGetReverse(await reverseAlph(anyInpt));
    }

    useEffect(() => {
        setDisplayTxt(getReverse);
    },[getReverse]);

    return(
        <>
            <h1 className="text-white text-[96px] flex justify-end mx-[210px]">Reverse It (Alpha)</h1>

        <div>
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px]">Give me Any Input</p>
                : <p className="text-white text-[36px]">{getReverse}</p>
            }
            
            <input className="bg-white inptSize" type="text" placeholder="Anything Here..." onChange={(event) => {
                setAnyInpt(event.target.value);
            }}/>
        </div>


        <button className="text-white text-[36px] btnCol" onClick={fetchReverseA}>Go!</button>
        <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>

        </>
    )
}

export default ReverseItA