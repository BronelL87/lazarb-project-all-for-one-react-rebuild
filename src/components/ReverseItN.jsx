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
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">
           
            <h1 className="text-white text-[96px] flex justify-end">Reverse It (Num)</h1>
        
        <div className="flex flex-col items-center gap-6 lg:items-center lg:mx-[150px] lg:mt-[100px]">
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px] max-[560px]:w-[340px]">Please input any chain of numbers</p>
                : <p className="text-white text-[36px] max-[560px]:w-[340px]">{getReverseNums}</p>
            }
            
            <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Numbers Here..." onChange={(event) => {
                setNumChainInpt(event.target.value);
            }}/>
        </div>


        <div className="grid grid-col-2 lg:justify-end lg:mr-[350px] gap-10 md:justify-center md:mr-[0px]">
                    <div>
                         <button className="text-white text-[36px] btnCol" onClick={fetchReverseNums}>Go!</button>
                    </div>
                    <div>
                        <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>
                    </div>
                </div>

        </div>

    )
}

export default ReverseItN