import React, {useState} from "react";
import axios from 'axios';
import emailpic from "../images/inbox.png";



const SignUp = () => {

  const [postData, setPostData] = useState ({
    email: '',
    password: '',
    confirmpassword: '',

  });

  const handleSignUpInput = (e) => {
    const {name, value} = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handlePostRequest = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('https://localhost:7177/api/User/register', postData)
      console.log ('Response : ', response.data);
    }catch(error){
      console.log('Error:', error)
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome </span>
          <span className="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
         <form onSubmit={handlePostRequest}>
            <div class="py-4">
              <span class="mb-2 text-md">Email</span>
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                value={postData.email}
                onChange={handleSignUpInput}
                id="email"
              />
            </div>
            <div class="py-4">
              <span class="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                value={postData.password}
                onChange={handleSignUpInput}
                id="password"
                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div class="py-4">
              <span class="mb-2 text-md">Confirm Password</span>
              <input
                type="password"
                name="confirmpassword"
                value={postData.confirmpassword}
                onChange={handleSignUpInput}
                id="confirmpassword"
                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div class="flex justify-between w-full py-4">
              <div class="mr-24">
                <input type="checkbox" name="ch" id="ch" class="mr-2" />
                <span class="text-md">Remember Me</span>
              </div>
              <span class="font-bold text-md">Forgot password</span>
            </div>
            <button type="submit" class="w-full  bg-blue-500 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Sign Up
            </button>

            <div class="text-center text-gray-400">
              Dont'have an account?
              <span class="font-bold text-black">Sign up for free</span>
            </div>
          </form>
        </div>
        

        <div class="relative">
          <img
            src={emailpic}
            alt="img"
            class="w-[420px] h-full hidden rounded-r-2xl md:block object-cover"
          />

          <div class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
