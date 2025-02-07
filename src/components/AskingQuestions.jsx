import { Link } from "react-router-dom"
import { askQuestions } from "../services/DataService";
import { useEffect, useState } from "react";

const AskingQuestions = () => {
    const [nameInput, setNameInput] = useState('');
    const [timeInput, setTimeInput] = useState('');
    const [displayTxt, setDisplayTxt] = useState('');

    const [resp, setResp] = useState(''); 

    const fetchAskQ = async () => {
        setResp( await askQuestions( nameInput, timeInput))
    }

    useEffect(() => {
        setDisplayTxt(resp);
    }, [resp]);

    return(
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">

            <h1 className="text-white text-[96px] flex lg:justify-end md:justify-center">Asking Questions</h1>

        <div className="flex flex-col items-center gap-6 lg:items-end lg:mx-[220px] lg:mt-[10px] w-[531px]">
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px] max-[560px]:w-[340px]">Please Input Your name and time you woke up</p>
                :<p className="text-white text-[36px]">{resp}</p>

            }
            
            <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Name Here..." onChange={(event) => {
                setNameInput(event.target.value);
            }}/>
            <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Time Here..." onChange={(event) => {
                setTimeInput(event.target.value);
            }}/>
        </div>

            <div className="grid grid-col-2 lg:justify-end lg:mr-[350px] gap-10 md:justify-center md:mr-[0px]">
                <div>
                    <button className="text-white text-[36px] btnCol" onClick={fetchAskQ}>Go!</button>
                </div>
                <div>
                    <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 
                </div>
            </div>
        
        

        </div>
    )
}

export default AskingQuestions