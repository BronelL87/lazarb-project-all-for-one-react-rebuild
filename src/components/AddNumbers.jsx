import { useEffect, useState } from "react"
import { addNums } from "../services/DataService";
import { Link } from "react-router-dom";

const AddNumbers = () => {
        const [firstNum, setFirstNum] = useState('');
        const [secondNum, setSecondNum] = useState('');
        const [displayTxt, setDisplayTxt] = useState('')

        const [addNum, setAddNum] = useState('');

        const fetchAddition = async () => {
            setAddNum(await  addNums(firstNum, secondNum));
        }

        useEffect(() => {
            setDisplayTxt(addNum);
        }, [addNum])

    return (
        <>
            <h1 className="text-white text-[96px] flex justify-end mx-[150px]">Adding Numbers</h1>

            <div>
                {
                    displayTxt.length == 0 ? <p className="text-white text-[36px]">Please Input Your two numbers</p>
                    :<p className="text-white text-[36px]">{addNum}</p>

                }
                
                <input className="bg-white inptSize" type="text" placeholder="First Number..." onChange={(event) => {
                    setFirstNum(event.target.value);
                }}/>
                <input className="bg-white inptSize" type="text" placeholder="Second Number..." onChange={(event) => {
                    setSecondNum(event.target.value);
                }}/>
            </div>


            <button className="text-white text-[36px] btnCol" onClick={fetchAddition}>Go!</button>
            <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>


        </>
    )
}
export default AddNumbers