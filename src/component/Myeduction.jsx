import { useState } from "react";
import "./Myeduction.css";
import btech from "../assets/eng.png";
import dip from "../assets/dip.png";
import school from '../assets/school.png'
const Myeduction = () => {
  return (
    <div className="myeduction">
      <h2>📘 Education</h2>
      <p>
        Explore the academic milestones and certifications that have shaped my
        knowledge and skills in the world of technology and development.
      </p>
      <div className="eduction-inner eductionfirst">
        <div className="degree-img">
          <img src={btech} alt="B Tech Image" />
        </div>
        <div className="degree-dis">
          <h2>Bachelor of Technology (BTech) </h2>
          <p>
            Earning my Bachelor of Technology (BTech) has been a pivotal moment
            in my career. This degree not only provided me with a deep
            understanding of core engineering concepts but also equipped me with
            the practical skills needed to excel in the tech industry. It’s been
            a journey of learning, growth, and hands-on application, preparing
            me to tackle real-world challenges with confidence.
          </p>
        </div>
      </div>
      <div className="eduction-inner eductionsecond">
        <div className="degree-dis">
          <h2>Diploma in Computer Technology </h2>
          <p>
          Earning my Diploma in Computer Technology has been a crucial milestone in my academic and professional journey. This program provided a solid foundation in computer science principles, programming, networking, and hardware systems. It emphasized practical, hands-on training that allowed me to develop real-world problem-solving skills and technical proficiency. The experience not only strengthened my understanding of core IT concepts but also prepared me to adapt to the fast-evolving tech industry with confidence.
          </p>
        </div>
        <div className="degree-img">
          <img src={dip} alt="B Tech Image" />
        </div>
      </div>
      <div className="eduction-inner edcutionthird">
        <div className="degree-img">
          <img src={school} alt="B Tech Image" />
        </div>
        <div className="degree-dis">
          <h2>Secondary School (10th Grade) </h2>
          <p>
          Completing my 10th-grade education was a key step in building a strong academic foundation. During this time, I developed essential skills in mathematics, science, and communication, which prepared me for more advanced studies. It was a period of personal growth and learning that sparked my interest in technology and laid the groundwork for my future in the field of computer science.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Myeduction;
