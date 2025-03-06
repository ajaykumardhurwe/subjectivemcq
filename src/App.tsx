
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BottomNav } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { MCQ } from './pages/MCQ';
import { Jobs } from './pages/Jobs';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { JobDetails } from './pages/Jobs/JobDetails';
import {A2Class} from './pages/A2Class/index'
import LanguageScreen from "./pages/A2Class/LanguageScreen";
import MainPage from "./pages/A2Class/FiveTab/";
import PaymentPage from './pages/Home/paymentPage';
import PaymentSuccessPage from './pages/Home/PaymentSuccess';
import { McqPaymentPage } from './pages/MCQ/McqPaymentPage';
import { McqPqaymentSuccessPage } from './pages/MCQ/McqPaymentSuccessPage';
import { TopicList } from './pages/MCQ/TopicList';
import { AboutUs } from './pages/Profile/AboutUs';
import {ContactUs} from './pages/Profile/ContactUs';
import {PrivacyPolicy} from './pages/Profile/PrivacyPolicy';
import {Services} from './pages/Profile/Services'
import { EFormFillup } from './pages/Jobs/EFormFillup';
import { JobConsultancy } from './pages/Jobs/JobConsultancy';
import VisitorCounter from './lib/VisitorCounter';
import Colleges from './pages/A2Class/Colleges';
import Schools from './pages/A2Class/Schools';
import SchoolsData from './pages/A2Class/SchoolsData';
import CollegeDetail from './pages/A2Class/CollegeDetail';
import Notification from './components/layout/Notification';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 pb-16">
 {/* <VisitorCounter></VisitorCounter> 
       <Notification></Notification> */}

{/* 
<div style={{ flexDirection: 'row', alignItems: 'right' }}>
  <VisitorCounter />
  <Notification />
</div> */}


<div style={{ 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  padding: '10px',
  backgroundColor: 'transparent',
  zIndex: 1000 ,
  opacity:1,
}}>

  <Notification />
</div>
<div style={{ 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  position: 'fixed', 
  top: 0, 
  right: 0, 
  padding: '10px',
  // backgroundColor: '#fff',
  backgroundColor: 'transparent',
  
  zIndex: 1000 ,
  opacity:1,
}}>

  <VisitorCounter></VisitorCounter>
</div>

{/* <><h1>.</h1></>
<><h1>.</h1></> */}

        <Routes>
          <Route path="/" element={<MCQ />} />
          <Route path="/mcq/*" element={<MCQ />} />
        <Route path="/topics/:subject" element={<TopicList />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;






























