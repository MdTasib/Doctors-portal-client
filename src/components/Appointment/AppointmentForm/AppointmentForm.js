import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('https://shrouded-escarpment-83874.herokuapp.com/addAppointment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(success => {
        if (success) {
          closeModal();
          alert(`Hey ${data.name}! Your Appointment Created Successfully. Thanks ${data.name}`)
        }
      })
  }

  return (
    <div className='w-100'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-info">{appointmentOn}</h2>
        <p className="text-secondary text-center"><small>On {date.toDateString()}</small></p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='form-control my-2' placeholder='Name' type="text" {...register("name")} required />
          <input className='form-control my-2' placeholder='Your email' type='email' {...register("email")} required />
          <input className='form-control my-2' placeholder='Phone number' type='number' {...register("number")} required />

          <div className="row">
            <div className="col-md-4">
              <select className='form-select my-2'  {...register("gender")} required>
                <option value="male">Male</option>
                <option value="Female">Female</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div className="col-md-4">
              <input className='form-control my-2' placeholder='Your Age' type='number' {...register("age")} required />
            </div>
            <div className="col-md-4">
              <input className='form-control my-2' placeholder='Weight' type='number' {...register("weight")} required />
            </div>
          </div>

          <input className='btn btn-info text-white w-100' type="submit" value='Send' />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;