import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import OnceSubmittesmessage from './Components/OnceSubmited/OnceSubmittesmessage';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import Footer from './Components/Footer.js/Footer';
// import SignUpForm from './Components/SignUpForm/SignUpForm';

function App() {
  return (
    <div className="App">
     <Header />
     <OnceSubmittesmessage />
     <SignUpForm />
     <Footer />
    </div>
  );
}

export default App;
