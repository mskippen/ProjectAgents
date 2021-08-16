import React, { useState } from "react";

const Contact = () => {
    const [isTrue, setIsTrue] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setIsTrue(true)
    }
  return (
    <section id="contact" className="Contact">
      <div className="wrapper">
        <div className="d-grid">
          <div>
            <h3>Contact</h3>
            <p>For business enquiries, please fill out the following form</p>
          </div>
          <div className="form">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name *</label>
                      <input type="text" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea></textarea>
                </div>
                <div className="form-footer">
                  <div className="d-flex">
                    <button>Submit</button>
                    {isTrue && <p>Thank you for submitting, we will be in touch!</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
