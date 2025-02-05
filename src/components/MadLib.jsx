import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoryLib } from "../services/DataService";

const MadLib = () => {
    const [mlNameInput, setMlNameInput] = useState('');
    const [placeInput, setPlaceInput] = useState('');
    const [adjectiveInput, setAdjectiveInput] = useState('');
    const [animalInput, setAnimalInput] = useState('');
    const [verbInput, setVerbInput] = useState('');
    const [colorInput, setColorInput] = useState('');
    const [nounInput, setNounInput] = useState('');
    const [numberInput, setNumberInput] = useState('');
    const [vehicleInput, setVehicleInput] = useState('');
    const [professionInput, setProfessionInput] = useState('');

    const [displayTxt, setDisplayTxt] = useState('');

    const [storyOut, setStoryOut] = useState('');
    const fetchStory = async () => {
        setStoryOut(await StoryLib(mlNameInput, placeInput, adjectiveInput, animalInput, verbInput, colorInput, nounInput, numberInput, vehicleInput, professionInput));
    }

    useEffect(() => {
        setDisplayTxt(storyOut)
    },[storyOut]);

    return(
        <>
            <h1 className="text-white text-[96px] flex justify-end mx-[150px]">Mad Libs</h1>

        <div>
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px]">Please fill all fields for a story</p>
                :<p className="text-white text-[36px]">{storyOut}</p>
            }
            
            <input className="bg-white inptSize" type="text" placeholder="Name..." onChange={(event) => {
                setMlNameInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Place..." onChange={(event) => {
                setPlaceInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Adjective..." onChange={(event) => {
                setAdjectiveInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Animal..." onChange={(event) => {
                setAnimalInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Verb..." onChange={(event) => {
                setVerbInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="color..." onChange={(event) => {
                setColorInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Noun..." onChange={(event) => {
                setNounInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Number..." onChange={(event) => {
                setNumberInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Vehicle..." onChange={(event) => {
                setVehicleInput(event.target.value);
            }}/>
            <input className="bg-white inptSize" type="text" placeholder="Profession..." onChange={(event) => {
                setProfessionInput(event.target.value);
            }}/>
        </div>


        <button className="text-white text-[36px] btnCol" onClick={fetchStory}>Go!</button>
        <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>

        </>
    )
}
export default MadLib