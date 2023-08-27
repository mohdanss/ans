import React from 'react'
import './AboutResponsiveDesign.styles.css'

const Ans = {
    name: "Muhammad Ans",
    dateOfBirth: new Date("2001-05-02"),
    education: {
        degree: "BS Information Technology",
        school: "University of the Punjab, Lahore",
        department: "PUCIT",
        year: "2019 - 2023"
    },
    contact: {
        email: "mohd.ans.riaz@gmail.com",
        phone: "+92 308 5062 108",
        address: "Lahore, Pakistan"
    },
    workExperience: [
        {
            title: "Co-Founder and Full Stack Engineer",
            company: "Innovaxel",
            duration: "2021 - Present",
            type: "hybrid",
        },
        {
            title: "UI/UX Designer & Frontend Engineer",
            company: "Fiverr & Upwork",
            duration: "2020 - Present",
            type: "freelance",
        }
    ]
};

const AboutResponsiveDesign = () => {
    return (
        <div className="ard">
            <h2>Education</h2>
            <p>{Ans.education.degree}</p>
            <p> {Ans.education.school}</p>
            <p> {Ans.education.department}</p>
            <p> {Ans.education.year}</p>

            <h2>Contact</h2>
            <p> {Ans.contact.email}</p>
            <p> {Ans.contact.phone}</p>
            <p> {Ans.contact.address}</p>

            <h2>Work Experience</h2>
            <ul>
                {Ans.workExperience.map((experience, index) => (
                    <li key={index}>
                        <p> {experience.title}</p>
                        <p> {experience.company}</p>
                        <p> {experience.duration}</p>
                        <p> {experience.type}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AboutResponsiveDesign