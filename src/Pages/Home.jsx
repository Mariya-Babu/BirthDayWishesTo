import React from "react";
import "./Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  //Function to generate Link

  const validate = () => {
    let btnElement = document.querySelectorAll(".btn");
    let Name = btnElement[0].value;
    let date = btnElement[1].value;

    console.log(date);

    let fnameElement = document.querySelector('.fname');
    let dateElement = document.querySelector('.dob');

    console.log(`Date = ${dateElement}`);

    if (Name === "" || date === "") {
      if(Name === '' && date === ""){
        fnameElement.style.display = 'block';
        fnameElement.innerHTML = 'Please fill Name field';
        dateElement.style.display = 'block';
        dateElement.innerHTML = 'Please Enter Date filed';

      }
      if(Name === ""){
        dateElement.style.display = 'none';
        fnameElement.style.display = 'block';
        fnameElement.innerHTML = 'Please Enter your FName';
      }
      else if(date === ""){
        fnameElement.style.display = 'none';
        dateElement.style.display = 'block';
        dateElement.innerHTML = 'Please Enter Data field';
      }
    } 
    else if(Name.length > 30 || date.length > 30){
      if(Name.length> 30 && date.length > 30){
        fnameElement.style.display = 'block';
        fnameElement.innerHTML = 'Enter characters lessthan 30';
        dateElement.style.display = 'block';
        dateElement.innerHTML = 'Enter characters lessthan 30';

      }
      else if(Name.length > 30){
        dateElement.style.display = 'none';
        fnameElement.style.display = 'block';
        fnameElement.innerHTML = 'Enter characters lessthan 30';
      }
      // else if(date.length > 30){
      //   fnameElement.style.display = 'none';
      //   dateElement.style.display = 'block';
      //   dateElement.innerHTML = 'Enter characters lessthan 30';
      // }
    }
    else {

      fnameElement.style.display = 'none';
      dateElement.style.display = 'none';
      generateLink();
    }
  };
  const generateLink = () => {
    // alert("Link Will generate here");
    let link = `https://mariya-babu.github.io/BirthDayWishesTo/`;
    let linkSection = document.querySelector(".link-section");
    let visitSite = document.querySelector(".visit-site");
    let invisible = document.querySelector(".invisible");
    // let linkElement = document.querySelector('.link');
    let btnElement = document.querySelectorAll(".btn");
    let Name = btnElement[0].value;
    let date = btnElement[1].value;

    link = `${link}${Name}/${date}`;

    linkSection.style.display = "block";
    visitSite.style.display = "block";
    invisible.style.display = "block";

    setLink(link);
  };

  //Function to Visit Generate link
  const visitSite = () => {
    let btnElement = document.querySelectorAll(".btn");
    let Name = btnElement[0].value;
    let date = btnElement[1].value;
    navigate(`/${Name}/${date}`);
  };

  //Function to copy the text to clip board
  const copyToClipboard = () => {
    const copyBtn = document.querySelector(".copy-btn");
    copyBtn.style.display = "block";

    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log("Text copied to clipboard: " + link);
      })
      .catch((error) => {
        console.error("Unable to copy text: " + link);
      });
  };

  const [link, setLink] = useState("");

  useEffect(() => {
    let linkElement = document.querySelector(".link");
    linkElement.innerHTML = `${link}`;
  }, [link]);

  return (
    <div className="main">
      <h1 className="title">Best Website to Wish your Best Friend on his/her  <span className="sh">BirthDay</span> </h1>
      <div className="container">
        {/* Main Section to generate link  */}
        <div>
          <h1>Enter Details!</h1>
          <input type="text" placeholder="Enter the Name " className="btn" />
          <p className="fname">*Please Enter your Name </p>
          <input type="date" placeholder="Enter the DateOfBirth " className="btn" style={{ width: "250px", marginTop: "0px" }} />
          <p className="dob">*Please Enter the Date Of Birth</p>
          <button className="g-link" onClick={()=> validate()}>
            Generate Link
          </button>
        </div>

        {/* After Generating link this section will visible  */}
        <div className="invisible">
          <div className="link-section">
            {link === "" ? (
              <>
                <p className="link">Link will appear</p>
              </>
            ) : (
              <NavLink to={link} className="link copy-text"></NavLink>
            )}
          </div>
          <button className="visit-site g-link" onClick={visitSite}>
            Visit Site
          </button>
          <button onClick={copyToClipboard} className="g-link copy-btn">
            Copy Text
          </button>
        </div>

      </div>
      <p className="copy-right">Design and Developed by Mariya Babu</p>
    </div>
  );
};

export default Home;
