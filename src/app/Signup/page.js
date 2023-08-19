"use client"
import localFont from "next/font/local";
import React, { useState } from 'react';
import signupApi from '../api/signup'; 
import Background from '@/components/background/Background';
import Link from "next/link";

const lun = localFont({ src: "/lunema-regular.ttf" });
const me = localFont({ src: "/MonumentExtended-Ultrabold.otf" });

const signins = [
  {
      id: 1,
      title: "Sign In",
      url: "/Signin",
  }
]

const Signup = () => {
  const handleSignup = async (event) => {
    event.preventDefault();
    const data = {
      fullname: event.target.fullname.value,
      phonenumber: event.target.phonenumber.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(data);

    try {
      const response = await signupApi(data); 
      console.log('Signup successful:', response);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <Background/>
      <div class={`flex justify-center p-1`}>
        <img src="logo.png" alt="logo" className="h-12 w-12" />
        <a href="/" className={`${me.className} my-2 text-nSize text-black`}>
          ToolBeng
        </a>
      </div>
      <div style={{
        maxWidth: '400px',
        margin: '0 auto',
        paddingRight: '3.5vw',
        paddingLeft: '3.5vw',
        paddingTop: '1vw',
        paddingBottom: '1vw',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)'
      }}>
          <h2 className={`${me.className} flex justify-center text-rSize text-black`}>Sign Up</h2>
        <div className={`${lun.className} flex justify-center text-aSize text-black`}>Rawat kendaraanmu dengan pelayanan terbaik</div>
        <form onSubmit={handleSignup}>
        <div>
          <div class={`flex justify-center border border-gray-500 rounded-lg my-2 ${lun.className}`}>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              class={`flex w-full rounded-lg text-black p-2`}
            />
          </div>
          <div class={`flex justify-start`}> 
            <div class={`pt-5 text-black text-kSize mr-1 ${lun.className}`}>+62</div>
            <div class={`flex w-full justify-center border border-gray-500 rounded-lg my-2 ${lun.className}`}>
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              placeholder="Phone Number"
              class={`flex w-full rounded-lg text-black p-2`}
            />
            </div>
          </div>
          <div class={`flex justify-center border border-gray-500 rounded-lg my-2 ${lun.className}`}>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email"
            class={`flex w-full rounded-lg text-black p-2`}
            />
          </div>
          <div class={`flex justify-center border border-gray-500 rounded-lg my-2 ${lun.className}`}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class={`flex w-full rounded-lg text-black p-2`}
            />
          </div>
        </div> 
          <div class={`justify-center`}>
            <button type="submit" class={`flex justify-center w-full text-sSize bg-toolbeng-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${lun.className}`}>Sign Up</button>
          </div>
        </form>
        <div class={`pt-2 flex text-aSize justify-center ${lun.className}`}>
          <div class={`underline text-black px-1 ${lun.className}`}>Already have an account? </div>
        <div>
          {signins.map(signin => (
                          <Link
                              class={`underline text-black hover:text-blue-500`}
                              key={signin.id}
                              href={signin.url}>
                                  {signin.title}
                          </Link>
                      ))}
        </div>
        </div>
        <div class="flex flex-col items-center">
          <hr class="w-full border-t border-black my-5"/>
          <div class={`my-1`}>
            <button class={`${lun.className} border border-gray-500 w-full bg-white text-black py-2 rounded-lg mb-2`}>
              <div class={`flex justify-center`}>
                <img src="google.svg" alt="google" class="h-5 w-5 md:h-6 md:w-6 mx-2" />
                Sign Up With Google
              </div>
            </button>
            <button class={`${lun.className} border border-gray-500 w-full bg-white text-black py-2 rounded-lg`}>
              <div class={`flex justify-center`}>
                <img src="apple.svg" alt="apple" class="h-5 w-5 md:h-6 md:w-6 mx-2" />
                Sign Up With Apple ID
              </div>
            </button>
          </div>
        </div>

      </div>
      <div class={`my-1 flex justify-center text-gray-500 text-sm mb-2 ${lun.className}`}>
        &copy; Toolbeng
      </div>
    </div>
  );
};

export default Signup;
