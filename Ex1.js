
import HomepageComponent from "./Homepage";
import LoginComponent from "./LOgin";


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupComponent from "./Signup";
import FeedbackComponent from "./Feedback";


let Ex1Component=()=>{
    
    return(
        <>
      <BrowserRouter>
      <Routes>

        
        <Route path="homepage" element={<HomepageComponent/>}/>
        <Route path="login" element={<LoginComponent/>}/>
        <Route path="signup" element={<SignupComponent/>}/>
        <Route path="feedback" element={<FeedbackComponent/>}/>
      </Routes>
      </BrowserRouter>
        </>
    )
}

export default Ex1Component;