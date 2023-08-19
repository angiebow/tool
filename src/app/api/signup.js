"use client"
import axios from "axios";
import API_BASE_URL from './const';

const signup = async(args) => {
  axios.post(API_BASE_URL + '/signup', {
    fullname: args.fullname,
    phonenumber: args.phonenumber,
    email: args.email,
    password: args.password,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default signup;