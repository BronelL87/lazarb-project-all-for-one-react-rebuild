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
        <>
                <div className="grid grid-col-2 justify-end mx-[200px] my-[30px] gap-11">
                <h1 className="text-white text-[96px] flex justify-end mx-[210px]">Magic 8 Ball</h1>

            <div>
                {
                    displayTxt.length == 0  ? <p className="text-white text-[36px]">Please Input Your Question</p>
                    :  <p className="text-white text-[36px]">{getBall}</p>
                }
            
             <input className="bg-white inptSize" type="text" placeholder="Question Here..." onChange={(event) => {setQuestionInpt(event.target.value)}}/>
            </div>

                <div>
                    <div>
                        <button className="text-white text-[36px] btnCol" onClick={fetchBallResponse}>Go!</button>
                    </div>
                    
                    <div>
                       <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 
                    </div>
                    
                </div>
                

        </div>
        </>
    )
}

export default MagicBall