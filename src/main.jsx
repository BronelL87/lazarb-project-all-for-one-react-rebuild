import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SayHello from './components/SayHello.jsx'
import AddNumbers from './components/AddNumbers.jsx'
import AskingQuestions from './components/AskingQuestions.jsx'
import GreaterLess from './components/GreaterLess.jsx'
import MadLib from './components/MadLib.jsx'
import MagicBall from './components/MagicBall.jsx'
import OddEven from './components/OddEven.jsx'
import RestaurantPick from './components/RestaurantPick.jsx'
import ReverseItA from './components/ReverseItA.jsx'
import ReverseItN from './components/ReverseItN.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path= '/say-hello' element={<SayHello/>}/>
    <Route path= '/add-numbers' element={<AddNumbers/>}/>
    <Route path= '/asking-questions' element={<AskingQuestions/>}/>
    <Route path= '/greater-less' element={<GreaterLess/>}/>
    <Route path= '/mad-lib' element={<MadLib/>}/>
    <Route path= '/magic-ball' element={<MagicBall/>}/>
    <Route path= '/odd-even' element={<OddEven/>}/>
    <Route path= '/restaurant-pick' element={<RestaurantPick/>}/>
    <Route path= '/reverse-it-a' element={<ReverseItA/>}/>
    <Route path= '/reverse-it-n' element={<ReverseItN/>}/>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
