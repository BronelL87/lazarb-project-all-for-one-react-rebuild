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
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">
            <h1 className="text-white text-[96px] flex justify-end mr-[100px]">Odd Or Even</h1>

        <div className="flex flex-col items-center gap-6 lg:items-end lg:mx-[220px] lg:mt-[50px]">
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px] max-[560px]:w-[340px]">Please Input Your Number</p>
                : <p className="text-white text-[36px] max-[560px]:w-[340px]">{oddEvenOut}</p>
            }
            
            <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Number Here..." onChange={(event) => {
                setNumInpt(event.target.value);
            }}/>
        </div>

            <div className="grid grid-col-2 justify-end mx-[330px] gap-10">
                <div>
                    <button className="text-white text-[36px] btnCol" onClick={checkOddEven}>Go!</button>
                </div>
                <div>
                    <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>
                </div>
            </div>
     
        


        </div>
    )
}

export default OddEven