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
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">
                <h1 className="text-white text-[96px] flex justify-end mx-[210px]">Say Hello</h1>

            <div className="flex flex-col items-center gap-6 lg:items-end lg:mx-[220px] lg:mt-[100px]">
                {
                    displayTxt.length == 0  ? <p className="text-white text-[36px] max-[560px]:w-[340px]">Please Input Your Name</p>
                    :  <p className="text-white text-[36px] max-[560px]:w-[340px]">{hello}</p>
                }
            
             <input className="bg-white inptSize max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Name Here..." onChange={(event) => {setUserInput(event.target.value)}}/>
            </div>

                <div className="grid grid-col-2 justify-end mx-[330px] gap-10">
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