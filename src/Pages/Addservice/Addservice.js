import React from 'react';
import { useForm } from "react-hook-form";
const Addservice = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = 'http://localhost:4000/service/'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'

      },



      body: JSON.stringify(data)
    })

      .then(res => res.json())
      .then(result => {
        console.log(result)
      });
  }
  return (
    <div>
      <h1>Please add service here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} />
        <input {...register("description")} />
        <input type="number" {...register("price")} />
        <input type="text" {...register("img")} />
        <input type="submit" value='add service ' />
      </form>
    </div>
  );
};

export default Addservice;