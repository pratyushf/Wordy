import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor:props.mode === 'dark'?'#0B2447':'white',
  };

  return (
    <div className="container p-4" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle} >
              At Wordy, our mission is to provide a simple
              and user-friendly text formatting tool that makes it easy
              to format your text the way you want. We believe that everyone
              should be able to express themselves clearly and effectively,
              and our tool is designed to help you do just that,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Our Team
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our team is made up of experienced developers and designers
              who are passionate about creating innovative solutions that
              solve real-world problems. We are dedicated to providing the
              best possible user experience for our customers, and we work
              hard to ensure that our tool is fast, reliable, and easy to use.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Values
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              At Wordy, we believe in putting our customers first.
              We are committed to providing excellent customer service and
              support, and we always strive to exceed our customers' expectations.
              We also believe in transparency, honesty, and integrity, and we work
              hard to build trust with our customers and partners.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
