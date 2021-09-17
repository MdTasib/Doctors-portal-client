import React, { useState } from 'react';
import Sidebar from '../common/Sidebar/Sidebar';

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = event => {
    const newInfo = { ...info };
    newInfo[event.target.name] = event.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = e => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);

    fetch('https://shrouded-escarpment-83874.herokuapp.com/addDoctor', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <section className="row w-100">
      <div className="col-md-2 bg-info py-4">
        <Sidebar />
      </div>
      <div className="col-md-10 p-4 pe-5">
        <h5 className="text-info">Add a Doctor</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group py-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter Email" />
          </div>
          <div className="form-group py-2">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Name" />
          </div>
          <div className="form-group py-2">
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
          </div>
          <button type="submit" className="my-2 btn btn-info text-white">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;