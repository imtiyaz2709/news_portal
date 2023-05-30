"use client"
import React, { useState } from "react";

const pages = () => {
const initdata = {
  title:"",
  category:"",
  date:"",
  reporter:"",
  content:""
}
const [data,setData] = useState(initdata)

const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData(prevData => ({...prevData,[name]:value}))
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(data)

  let insertData = await fetch("http://127.0.0.1:3000/api/Post",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json"
    }
})

 await insertData.json();
 setData(initdata)

}
  
  return (
    <div className="w-full flex justify-center">
      <div className="w-6/12">
        <h1 className="text-2xl font-semibold">Insert Here</h1>
        <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-col">
            <label htmlFor="">Titel</label>
            <input
            onChange={handleChange}
              value={data.title}
              type="text"
              name="title"
              className="px-3 py-2 rounded border"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Reporter</label>
            <input
            onChange={handleChange}
              value={data.reporter}
              type="text"
              name="reporter"
              className="px-3 py-2 rounded border"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date</label>
            <input
            onChange={handleChange}
              value={data.date}
              type="text"
              name="date"
              className="px-3 py-2 rounded border"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Category</label>
            <input
            onChange={handleChange}
              value={data.category}
              type="text"
              name="category"
              className="px-3 py-2 rounded border"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Content</label>
            <input
              onChange={handleChange}
              value={data.content}
              type="text"
              name="content"
              className="px-3 py-2 rounded border"
            />
          </div>
          <button type="submit" className="px-3 py-2 bg-teal-800 text-white rounded my-3 w-full">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default pages;
