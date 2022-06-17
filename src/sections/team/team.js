import React from "react";

import "../../css/team.css";

import twitter from "../../resources/team/twitter_logo.svg";
import linkedin from "../../resources/team/linkedin_logo.svg";
import distrikt from "../../resources/team/distrikt_logo.svg";

export default function Team(props){

    let team = [{
        name: "Omar Hernandez",
        role: "Founder",
        position: "Founder CEO",
        image: "bizkit.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Moises Lopez",
        role: "Founder",
        position: "Game Director",
        image: "frenzy.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Francisco Peguero",
        role: "Founder",
        position: "Web3 Director",
        image: "pk34.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Ladislao Cantarell",
        role: "Founder",
        position: "Community Director",
        image: "wos.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Mariano Stoll",
        role: "Co-Founder",
        position: "COO & CHRO",
        image: "stoll.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Sury Webb",
        role: "Co-Founder",
        position: "Senior Game Developer",
        image: "sury.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Manuel Quintero",
        role: "Co-Founder",
        position: "Senior Game Developer",
        image: "saku.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Christian Alonso",
        role: "",
        position: "Senior Web3 Developer",
        image: "siegfried.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Erick Picos",
        role: "",
        position: "Senior Game Developer",
        image: "erick.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Gianella Parra",
        role: "",
        position: "Community Manager",
        image: "gianella.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Denielle Serran",
        role: "",
        position: "Community Q&A",
        image: "cade.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Bryan Ordaz",
        role: "Co-Founder",
        position: "Graphics & UI/UX Design",
        image: "brayan.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Angel Macorra",
        role: "",
        position: "Art Producer & SCA",
        image: "macorra.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Vladimir Diaz",
        role: "Co-Founder",
        position: "3D Art Manager & S3DA",
        image: "moo.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Ingram Diaz",
        role: "Co-Founder",
        position: "2D Art Manager & SCA",
        image: "ingram.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Adriana Delgado",
        role: "",
        position: "Senior Concept Art",
        image: "audrey.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Ricardo Cervantez",
        role: "",
        position: "3D Generalist",
        image: "zambur.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Juan Ávila",
        role: "",
        position: "3D Animation",
        image: "juan.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Aranzazú Osorio",
        role: "",
        position: "3D Modeling",
        image: "aranza.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Eduardo Sanchez",
        role: "",
        position: "3D Generalist",
        image: "lalito.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    }];

    const goTo = (url) => {
        window.open(url);
    };

    return (
        <div className="team-div">
            <div className="team-background">
                <div className="team-inner-div">
                    <div className="team-text-div">
                        <label className="team-main-title">MEET THE TEAM</label>
                        <label className="team-main-subtitle">We are a full team of seasoned, passionate and highly motivated people from all over the world, with over 10,000 years of experienced combined, together we ensure Cosmicrafts is a success.</label>
                        <div className="team-badge-div">
                            <div className="team-badge"></div>
                            <label className="team-badge-text">Autonomy
                              <br/>Creativity
                              <br/>Loyalty
                              <br/>Proactivity
                              <br/>Transparency
                            </label>
                        </div>
                        <label className="team-main-title">OUR MISSION</label>
                        <label className="team-main-subtitle">To build the greatest Web3 Gaming Community, with free-and-easy access to our technology and  by creating legendary experiences in the Metaverse.</label>
                    </div>
                    <div className="team-panel-div">
                        {team.map((m) => {
                            let _img = "./team/" + m.image;
                            return(
                                <div className="team-slot-div">
                                    <img src={_img} alt={"Picture " + m.name} className="pic-team" />
                                    <label className="team-name">{m.name}</label>
                                    <label className="team-role">{m.role}</label>
                                    <label className="team-position">{m.position}</label>
                                    <img src={twitter} alt="Twitter" className="twitter-logo" onClick={() => { goTo(m.twitter); }} />
                                    <img src={linkedin} alt="LinkedIn" className="linkedin-logo" onClick={() => { goTo(m.linkedin); }} />
                                    <img src={distrikt} alt="Distrikt" className="distrikt-logo" onClick={() => { goTo(m.distrikt); }} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}