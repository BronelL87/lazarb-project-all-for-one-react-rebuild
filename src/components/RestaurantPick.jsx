import { useEffect, useState } from "react";
import { pickRestaurant } from "../services/DataService";
import { Link } from "react-router-dom";

const RestaurantPick = () => {
        const [pickerResponse, setPickerResponse] = useState('');

        const fetchPicker = async (userCat) => {
            setPickerResponse(await pickRestaurant(userCat));
        }
        
    return(
        <div className="grid grid-col-2 justify-end mx-[200px] my-[30px] gap-11">
        <h1 className="text-white text-[96px] flex justify-end mx-[210px]">Restaurant Picker</h1>

    <div>
        {
            pickerResponse.length == 0  ? <p className="text-white text-[36px]">Select Category</p>
            :  <p className="text-white text-[36px]">{pickerResponse}</p>
        }
         
    </div>

        <div>
            <div>
                <button className="text-white text-[36px] btnCol" onClick={() => fetchPicker("fast food")}>Fast Food</button>
                <button className="text-white text-[36px] btnCol" onClick={() => fetchPicker("casual dining")}>Casual Dining</button>
                <button className="text-white text-[36px] btnCol" onClick={() => fetchPicker("fine dining")}>Fine Dining</button>
            </div>
            
            <div>
               <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 
            </div>
            
        </div>
        

</div>
    )
}
export default RestaurantPick