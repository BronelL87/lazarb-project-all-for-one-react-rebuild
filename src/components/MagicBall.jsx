import { useEffect, useState } from "react"
import { magic8Ball } from "../services/DataService";
import { Link } from "react-router-dom";

const MagicBall = () => {
    const [questionInpt, setQuestionInpt] = useState('');
    const [getBall, setGetBall] = useState('');
    const [displayTxt, setDisplayTxt] = useState('');

    const fetchBallResponse = async() => {
        setGetBall(await magic8Ball(questionInpt));
    }

    useEffect(() => {
        setDisplayTxt(getBall);
    },[getBall]);


    return(
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">
    
                <h1 className="text-white text-[96px] flex justify-end mx-[150px]">Magic 8 Ball</h1>

            <div className="flex flex-col items-center gap-6 lg:items-center lg:mx-[200px] lg:mt-[100px]">
                {
                    displayTxt.length == 0  ? <p className="text-white text-[36px] max-[560px]:w-[340px]">Please Input Your Question</p>
                    :  <p className="text-white text-[36px] max-[560px]:w-[340px]">{getBall}</p>
                }
            
             <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Question Here..." onChange={(event) => {setQuestionInpt(event.target.value)}}/>
            </div>

                <div className="grid grid-col-2 justify-end mx-[330px] gap-10">
                    <div>
                        <button className="text-white text-[36px] btnCol" onClick={fetchBallResponse}>Go!</button>
                    </div>
                    
                    <div>
                       <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 
                    </div>
                    
                </div>
                

        </div>
    
    )
}

export default MagicBall