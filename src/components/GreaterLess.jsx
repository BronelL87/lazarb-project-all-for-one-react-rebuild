import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { GreaterOrLessThan } from "../services/DataService";

const GreaterLess = () => {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [greatLess, setGreatLess] = useState('');
    const [displayTxt, setDisplayTxt] = useState('');

    const fetchGreaterOrLess = async() => {
        setGreatLess(await GreaterOrLessThan(firstNum, secondNum))
    }


    useEffect(() => {
        setDisplayTxt(greatLess)
    },[greatLess]);


    return(
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">
            <h1 className="text-white text-[96px] flex justify-end mx-[150px]">Greater Or Less</h1>

            <div className="flex flex-col items-center gap-6 lg:items-end lg:mx-[220px] lg:mt-[100px]">
                {
                    displayTxt.length == 0 ? <p className="text-white text-[36px] max-[560px]:w-[340px]">Please Input Two Numbers</p>
                    :<p className="text-white text-[36px]">{greatLess}</p>

                }
                
                <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="First Number..." onChange={(event) => {
                    setFirstNum(event.target.value);
                }}/>
                <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Second Number..." onChange={(event) => {
                    setSecondNum(event.target.value);
                }}/>
            </div>

            <div className="grid grid-col-2 justify-end mx-[330px] gap-10">
                    <div>
                        <button className="text-white text-[36px] btnCol" onClick={fetchGreaterOrLess}>Go!</button>
                    </div>
                    
                    <div>
                       <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 
                    </div>
                    
                </div>

        </div>
    )
}

export default GreaterLess