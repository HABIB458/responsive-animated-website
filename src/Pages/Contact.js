import { data } from 'autoprefixer';
import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [data, setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    msg: ''
  })

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }
  const submitForm = (e) => {
    e.preventDefault();
    alert(`
    Full Name: ${data.fullName}
    Email: ${data.email}
    Phone: ${data.phone}
    Message: ${data.msg}
    `)
  }


  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row mb-5">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitForm}>
              <div className="form-group my-3">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control mt-2" id="exampleFormControlInput1"
                  placeholder="Enter Your Full Name"
                  name='fullName'
                  value={data.fullName}
                  onChange={InputEvent}

                />
              </div>
              <div className="form-group my-3">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Mobile Number"
                  name='phone'
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
              <div className="form-group my-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>

              <div className="form-group my-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control mt-2"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name='msg'
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-auto my-3">
                <button type="submit" className="btn btn-outline-primary mb-2">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact;