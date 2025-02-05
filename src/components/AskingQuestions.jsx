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
        <>

            <h1 className="text-white text-[96px] flex justify-end mx-[150px]">Asking Questions</h1>

        <div>
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px]">Please Input Your name and time you woke up</p>
                :<p className="text-white text-[36px]">{resp}</p>

            }
            
            <input className="bg-white inptSize" type="text" placeholder="Name Here..." onChange={(event) => {
                setNameInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Time Here..." onChange={(event) => {
                setTimeInput(event.target.value);
            }}/>
        </div>


        <button className="text-white text-[36px] btnCol" onClick={fetchAskQ}>Go!</button>
        <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 

        </>
    )
}

export default AskingQuestions