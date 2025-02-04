import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <section className="grid grid-col-2 justify-end mx-[200px] my-[30px] gap-11">

        <h1 className="text-white text-[96px] flex justify-center">All For One</h1>
  
          <div>
              <Link to={'/say-hello'}><button className="text-white btnCol bg-[#7A3A13] text-[36px] w-[300px] h-[80px] rounded-[20px] text-center">Say Hello</button></Link>
             <Link to={'/asking-questions'}><button className="text-white btnCol text-[28px] bg-[#7A3A13] w-[300px] h-[80px] rounded-[20px] text-center ml-10">Asking Questions</button></Link>
          </div>
  
          <div>
             <Link to={'/adding-numbers'}><button className="text-white btnCol text-[30px] bg-[#7A3A13] w-[300px] h-[80px] rounded-[20px] text-center">Adding Numbers</button></Link> 
             <Link to={'/mad-lib'}><button className="text-white btnCol text-[36px] bg-[#7A3A13] w-[300px] h-[80px] rounded-[20px]  text-center ml-10">Mad Lib</button></Link> 
          </div> 
  
          <div>
             <Link to={'/odd-even'}><button className="text-white btnCol text-[36px] bg-[#7A3A13] w-[300px] h-[80px] rounded-[20px] text-center">Odd Or Even</button></Link> 
             <Link to={'/reverse-it-a'}><button className="text-white btnCol text-[28px] bg-[#7A3A13]  w-[300px] h-[80px] rounded-[20px] text-center ml-10">Reverse It (Alpha)</button></Link> 
          </div>
  
          <div>
              <Link to={'/greater-less'}><button className="text-white btnCol text-[32px] bg-[#7A3A13] w-[300px] h-[80px] rounded-[20px] text-center">Greater Or Less</button></Link> 
              <Link to={'/reverse-it-n'}><button className="text-white btnCol text-[28px] bg-[#7A3A13] rounded-[20px]  w-[300px] h-[80px] text-center ml-10">Reverse It (Num)</button></Link> 
          </div>
  
  
          <div>
              <Link to={'/magic-ball'}><button className="text-white btnCol text-[32px] bg-[#7A3A13] w-[300px] h-[80px] rounded-[20px] text-center">Magic 8 Ball</button></Link> 
              <Link to={'/restaurant-pick'}><button className="text-white btnCol text-[28px] bg-[#7A3A13] w-[300px] h-[80px] rounded-[20px] text-center ml-10">Restaurant Picker</button></Link> 
          </div>
  
      </section>
    )



}

export default HomePage