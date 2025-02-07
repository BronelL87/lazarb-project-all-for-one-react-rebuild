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
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">
            <h1 className="text-white text-[96px] flex justify-end mr-[50px]">Reverse It (Alpha)</h1>

        <div className="flex flex-col items-center gap-6 lg:items-center lg:mx-[220px] lg:mt-[100px]">
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px] max-[560px]:w-[340px]">Give me Any Input</p>
                : <p className="text-white text-[36px] max-[560px]:w-[340px]">{getReverse}</p>
            }
            
            <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Anything Here..." onChange={(event) => {
                setAnyInpt(event.target.value);
            }}/>
        </div>


        <div className="grid grid-col-2 lg:justify-end lg:mr-[350px] gap-10 md:justify-center md:mr-[0px]">
                    <div>
                         <button className="text-white text-[36px] btnCol" onClick={fetchReverseA}>Go!</button>
                    </div>
                    <div>
                        <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>
                    </div>
                </div>

        </div>
    )
}

export default ReverseItA