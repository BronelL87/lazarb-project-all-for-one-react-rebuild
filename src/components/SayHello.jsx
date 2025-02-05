import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHello } from "../services/DataService";

const SayHello = () => {

    const [userInput, setUserInput] = useState('');
    const [hello, setHello] = useState('');
    const [displayTxt, setDisplayTxt] = useState('');

    const fetchHello = async() => {
        setHello(await getHello( userInput ));
    }

    useEffect(() => {
        setDisplayTxt(hello);
    }, [hello])

    return (
        <div className="grid grid-col-2 justify-end mx-[200px] my-[30px] gap-11">
                <h1 className="text-white text-[96px] flex justify-end mx-[210px]">Say Hello</h1>

            <div>
                {
                    displayTxt.length == 0  ? <p className="text-white text-[36px]">Please Input Your Name</p>
                    :  <p className="text-white text-[36px]">{hello}</p>
                }
            
             <input className="bg-white inptSize" type="text" placeholder="Name Here..." onChange={(event) => {setUserInput(event.target.value)}}/>
            </div>

                <div>
                    <div>
                        <button className="text-white text-[36px] btnCol" onClick={fetchHello}>Go!</button>
                    </div>
                    
                    <div>
                       <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 
                    </div>
                    
                </div>
                

        </div>
    )


}

export default SayHello;