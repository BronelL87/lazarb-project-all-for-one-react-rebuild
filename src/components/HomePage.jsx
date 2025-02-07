import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <section className="flex flex-col items-center mx-auto my-8 gap-10 px-4 lg:mx-[200px] lg:items-end">
        <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[96px] text-center">
          All For One
        </h1>
      
        
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <Link to={'/say-hello'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] sm:text-[36px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Say Hello
            </button>
          </Link>
          <Link to={'/asking-questions'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Asking Questions
            </button>
          </Link>
        </div>
      
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <Link to={'/add-numbers'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] sm:text-[30px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Adding Numbers
            </button>
          </Link>
          <Link to={'/mad-lib'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] sm:text-[36px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Mad Lib
            </button>
          </Link>
        </div>
      
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <Link to={'/odd-even'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] sm:text-[36px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Odd Or Even
            </button>
          </Link>
          <Link to={'/reverse-it-a'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Reverse It (Alpha)
            </button>
          </Link>
        </div>
      
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <Link to={'/greater-less'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] sm:text-[32px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Greater Or Less
            </button>
          </Link>
          <Link to={'/reverse-it-n'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Reverse It (Num)
            </button>
          </Link>
        </div>
      
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <Link to={'/magic-ball'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] sm:text-[32px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Magic 8 Ball
            </button>
          </Link>
          <Link to={'/restaurant-pick'}>
            <button className="text-white btnCol bg-[#7A3A13] text-[28px] w-full max-w-[300px] h-[80px] rounded-[20px] text-center">
              Restaurant Picker
            </button>
          </Link>
        </div>
      </section>
    )



}

export default HomePage