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
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">
            <h1 className="text-white text-[96px] flex justify-end mr-[250px]">Mad Libs</h1>

        <div className="flex flex-col items-center gap-6 lg:items-end lg:mx-[100px] lg:mt-[50px]">
            {
                displayTxt.length == 0 ? <p className="text-white text-[36px] max-[560px]:w-[340px]">Please fill all fields for a story</p>
                :<p className="text-white text-[20px] max-w-[800px] max-[560px]:w-[340px]">{storyOut}</p>
            }
            <div>
                  <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Name..." onChange={(event) => {
                setMlNameInput(event.target.value);
            }}/>
            <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Place..." onChange={(event) => {
                setPlaceInput(event.target.value);
            }}/>
            <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Adjective..." onChange={(event) => {
                setAdjectiveInput(event.target.value);
            }}/>
            </div>
          <div>
                 <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Animal..." onChange={(event) => {
                setAnimalInput(event.target.value);
            }}/>
            <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Verb..." onChange={(event) => {
                setVerbInput(event.target.value);
            }}/>
            <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="color..." onChange={(event) => {
                setColorInput(event.target.value);
            }}/>
          </div>

          <div>
               <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Noun..." onChange={(event) => {
                setNounInput(event.target.value);
            }}/>
            <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Number..." onChange={(event) => {
                setNumberInput(event.target.value);
            }}/>
            <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Vehicle..." onChange={(event) => {
                setVehicleInput(event.target.value);
            }}/>
          </div>

          <div>
              <input className="bg-white w-[260px] h-[50px] rounded-[20px] max-[560px]:w-[340px] max-[560px]:h-[100px]" type="text" placeholder="Profession..." onChange={(event) => {
                setProfessionInput(event.target.value);
            }}/>
          </div>
       
         
          
        </div>

            <div className="grid grid-col-2 lg:justify-end lg:mr-[350px] gap-10 md:justify-center md:mr-[0px]">
                <div>
                        <button className="text-white text-[36px] btnCol" onClick={fetchStory}>Go!</button>
                </div>
                <div>
                    <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link>
                </div>
            </div>
        
        

        </div>
    )
}
export default MadLib