import React, { useState } from "react";
// import Axios from 'axios';
import "./card.css";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

const Card = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const showSuccessToast = () => {
    toast.success('Successfully submitted', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000 
    });
  };

  const showerrorToast = () => {
    toast.error('oops', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }

    // Check if email is empty
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }

    // Perform additional validation on email field
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }


    //    Axios
    axios.post("http://13.235.33.145:8000/users", {
        // name: data.name,
        // email: data.email
        name: name,
        email: email
        
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        console.log(res);
        if (res.status === 200) {
            console.log("registration Done");
            // setData({ name: '', email: '' });
            setName('');
            setEmail('');
            showSuccessToast()
        }
    }).catch((err) => {
        console.log("error while registarting", err);
        showerrorToast()
    })

};

const isValidEmail = (email) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


  return (
    <div className="card">
      <div className="card-container">
        <div className="text">
          <h3>PRE REGISTRATION</h3>
          <h3>FOR THE GAME!</h3>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: "bold", color: "white" }}>
              PRE-REGISTRATION
            </span>{" "}
            has started, submit your name and E-MAIL ID to get prior
            notification whenever the game will launch. You will get the
            notification on your email from us.
          </p>
        </div>
        <form className="input-container" onSubmit={() => handleSubmit()}>
          <input
            className="input-field-name"
            onChange={handleNameChange}
                        id='name'
                        value={name}
                        type="text"
                        placeholder="Enter Name here"
          />
          <input
            className={isMobile ? "input-field-name" : "input-field-email"}
            onChange={handleEmailChange}
            id='email'
            value={email}
            type="text"
            placeholder="Enter E-MAIL here"
          />
          {isMobile || <div className="input-field-email-sidebar">.</div>}
          <button
            className="button"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            SUBMIT
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Card;
