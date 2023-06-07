import React, { useState } from 'react'
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
  const notify = () => {
    toast.success('🦄 Ticket Booked', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
       
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        notify()
      };



  return (
    <form className=' flex justify-center gap-2 items-cnter flex-col' onSubmit={handleSubmit}>

    <label className='rounded-[] flex flex-col items-start'>
    <p  className='text-[10px] '>Your Name:</p>
      
      <input className='rounded-[10px] px-[5px] outline-none text-black'
        type="text"
        placeholder='abc'
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
    </label>

    <label className='flex flex-col items-start'>
    <p className='text-[10px] '>Email:</p>
        <input className='rounded-[10px] px-[5px] outline-none text-black'
          type="email"
          name="email"
          placeholder='abc@gmail.com'
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label className='flex flex-col items-start'>
      <p className='text-[10px] '>Phone No.</p>
        <input className='rounded-[10px] px-[5px] outline-none text-black'
          type="tel"
          name="phone"
          placeholder='646464464'
          
          value={formData.phone}
          onChange={handleChange}
        />
      </label>


      <button className='mt-[10px] bg-green-500 w-[80%] m-auto rounded-[5px] hover:outline' type="submit">Book Ticket</button>
    </form>
  )
}

export default Form;
