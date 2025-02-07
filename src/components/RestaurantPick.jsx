import { useEffect, useState } from "react";
import { pickRestaurant } from "../services/DataService";
import { Link } from "react-router-dom";

const RestaurantPick = () => {
        const [pickerResponse, setPickerResponse] = useState('');

        const fetchPicker = async (userCat) => {
            setPickerResponse(await pickRestaurant(userCat));
        }
        
    return(
        <div className="flex flex-col items-center mx-auto my-[30px] gap-11 lg:mx-[100px] lg:items-end sm:mx-0">
        <h1 className="text-white text-[96px] flex justify-end">Restaurant Picker</h1>

    <div className="flex flex-col items-center gap-6 lg:items-end lg:mx-[200px]">
        {
            pickerResponse.length == 0  ? <p className="text-white text-[36px]">Select Category</p>
            :  <p className="text-white text-[36px]">{pickerResponse}</p>
        }
         
    </div>

        <div className="flex flex-col items-center gap-6 lg:items-end lg:mx-[220px] lg:mt-[50px]">
            <div className="grid gap-6">
                <div>
                    <button className="text-white text-[36px] btnCol" onClick={() => fetchPicker("fast food")}>Fast Food</button>
                </div>
                <div>
                     <button className="text-white text-[36px] btnCol" onClick={() => fetchPicker("casual dining")}>Casual Dining</button>
                </div>
               
               <div>
                    <button className="text-white text-[36px] btnCol" onClick={() => fetchPicker("fine dining")}>Fine Dining</button>
               </div>
                
            </div>
            
            <div>
               <Link to={'/'}><button className="text-white text-[36px] btnCol">Main Menu</button></Link> 
            </div>
            
        </div>
        

</div>
    )
}
export default RestaurantPick