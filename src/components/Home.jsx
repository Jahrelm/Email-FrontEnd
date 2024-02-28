import React from 'react';
import emailpic from '../images/inbox.png';
import { useNavigate} from 'react-router-dom';

const Home = () => {
    const signUpNav = useNavigate();
    const loginNav = useNavigate();

    const handleSignUpNav = () => {
        signUpNav('/SignUp');

    };

    const handleLoginNav = () => {
        loginNav('/Login');

    } 
        
    return (
        <section className="flex flex-wrap items-center font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
            <div className="px-3 w-full lg:w-2/5">
                <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                    <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                        Secure Messaging For
                        <span className="text-5xl text-blue-500 leading-relaxeds">Applications</span>
                       
                    </h2>
                    <p className="visible mx-0 mt-3 mb-0 text-l leading-relaxed text-left text-slate-400">
                        Assisting you streamline communication with encryption
                    </p>
                </div>
                <div className="text-center lg:text-left">
                    <button onClick={handleLoginNav}  className="block visible py-4 px-8 mb-4 text-s font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block ">Login</button>
                    <button onClick={handleSignUpNav} className="block visible py-4 px-8 text-s font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500">Sign Up</button>
                </div>
            </div>
            <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5 flex justify-center items-center ml-auto">
                <div className="flex justify-center items-center">
                    <img  src={emailpic} alt="My Local Image" /> 
                </div>
            </div>
         
            <div className="w-full border-t border-gray-300 my-8"></div>
    
            <div className="text-center w-full text-xl">
                <p className="text-gray-600">Our secure messaging service ensures your data is protected with end-to-end encryption, making communication effortless and safe.</p>
            </div>
        </section>
    );
}

export default Home;
