import axios from "axios";
import API_BASE_URL from './const';

const signin = async(args) => {
  axios.post(API_BASE_URL + '/login', {
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

export default signin;