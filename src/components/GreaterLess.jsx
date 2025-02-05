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
        <>
            <h1 className="text-white text-[96px] flex justify-end mx-[150px]">Greater Or Less</h1>

            <div>
                {
                    displayTxt.length == 0 ? <p className="text-white text-[36px]">Please Input Two Numbers</p>
                    :<p className="text-white text-[36px]">{greatLess}</p>

                }
                
                <input className="bg-white inptSize" type="text" placeholder="First Number..." onChange={(event) => {
                    setFirstNum(event.target.value);
                }}/>
                <input className="bg-white inptSize" type="text" placeholder="Second Number..." onChange={(event) => {
                    setSecondNum(event.target.value);
                }}/>
            </div>


            <button className="text-white text-[36px] btnCol" onClick={fetchGreaterOrLess}>Go!</button>
            <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 


        </>
    )
}

export default GreaterLess