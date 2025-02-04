import { Link } from "react-router-dom"
import { askQuestions } from "../services/DataService";

const AskingQuestions = () => {
    const [nameInput, setNameInput] = useState([]);
    const [timeInput, setTimeInput] = useState([]);

    const [resp, setResp] = useState(''); 

    const fetchAskQ = async () => {

        setResp( await askQuestions( nameInput, timeInput))

    }

    return(
        <>

            <h1 class="text-white text-[96px] flex justify-end mx-[150px]">Asking Questions</h1>

        <div>
            <p class="text-white text-[36px]">Please Input Your name and time you woke up</p>
            <input class="bg-white inptSize" type="text" placeholder="Name Here..."/>
            <input class="bg-white inptSize" type="text" placeholder="Time Here..."/>
        </div>


        <button class="text-white text-[36px] btnCol">Go!</button>
        <Link to={'/'}><button class="text-white text-[36px] btnCol">Main Menu</button></Link> 

        </>
    )
}

export default AskingQuestions