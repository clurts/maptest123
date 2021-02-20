import { useForm } from 'react-hook-form';

import axios from "axios";

const NewUser = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post('https://jsonplaceholder.typicode.com/users', {...data})
      .then(res => console.log(res));
    }
  console.log(errors);

    const nameConfig = {
      required: {value:true, message: "Du skal udfylde dit navn" },
      maxLength: {value:80, message: "Dit navn er for langt" }
    }
    const usernameConfig = {
      required: {value:true, message: "Du skal udfylde dit brugernavn" }, 
      min: {value:5, message: "Dit brugernavn er for kort - mindst 5 karakterer" },
      max: {value:20, message: "Dit brugernavn er for langt - højest 20 karakterer" },
    }
    const emailConfig = {
      required: {value:true, message: "Du skal udfylde din email-adresse" },
      pattern: { value: /^\S+@\S+$/i, message: "Din email-adresse er ikke gyldig"}
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="name" name="name" ref={register(nameConfig)} />
    <input type="text" placeholder="username" name="username" ref={register(usernameConfig)} />
    <input type="text" placeholder="email" name="email" ref={register(emailConfig)} />
    <input type="submit" />
  </form>
  );
};

export default NewUser;
