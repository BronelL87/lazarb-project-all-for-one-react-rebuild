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
        <div className="grid grid-col-2 lg:justify-end lg:mx-[50px] my-[30px] gap-11 sm:mx-[0px] sm:justify-center">

            <h1 className="text-white text-[96px] flex justify-end">Asking Questions</h1>

        <div className="grid grid-col-2 justify-end ml-[200px] my-[30px] gap-11 w-[581px]">
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

            <div className="grid grid-col-2 justify-end mr-[350px] gap-10">
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