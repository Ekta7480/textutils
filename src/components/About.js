// import React, { useState } from "react";

export default function About(props) {
//   const [myStyle, setmyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });

let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    
    borderColor: props.mode === 'dark'?'white':'#042743'
}
  

  return (
    <div className="container" >
      <h1 className="my-3" style={ {color: props.mode ==='dark'?'white':'#042743'}}>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your text tool
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Powerful Text Analysis Tools at Your Fingertips</strong>
              <p>
                TextUtils provides a comprehensive suite of text analysis
                features:
              </p>
              <ul>
                <li>Word and character counting with real-time updates</li>
                <li>Estimated reading time calculation</li>
                <li>Case conversion (uppercase, lowercase, title case)</li>
                <li>Extra space removal and text cleanup</li>
                <li>Text copying to clipboard with a single click</li>
                <li>Text preview functionality</li>
              </ul>
              <p>
                Perfect for students, writers, and professionals who need quick
                text analysis and manipulation.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>100% Free and Open for Everyone</strong>
                            <p>TextUtils is committed to being completely free and accessible:</p>
                            <ul>
                                <li>No registration required</li>
                                <li>No hidden fees or premium features</li>
                                <li>No ads or annoying popups</li>
                                <li>No data collection or tracking</li>
                                <li>No limits on usage or text length</li>
                            </ul>
                            <p>We believe in providing quality tools that everyone can access. Your privacy is important to us - all text processing happens right in your browser with no data stored on any servers.</p>
                            
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Works Seamlessly Across All Modern Browsers</strong>
              <p>TextUtils is thoroughly tested and fully compatible with:</p>
              <ul>
                <li>Google Chrome (Version 60+)</li>
                <li>Mozilla Firefox (Version 60+)</li>
                <li>Microsoft Edge (Chromium-based)</li>
                <li>Safari (Version 12+)</li>
                <li>Opera (Version 50+)</li>
              </ul>
              <p>Our responsive design ensures TextUtils works perfectly on both desktop and mobile browsers, adapting to different screen sizes for the best user experience.</p>
                        
                        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
