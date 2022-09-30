import React from "react";

import "../../css/team.css";

import twitter from "../../resources/team/twitter_logo.svg";
import linkedin from "../../resources/team/linkedin_logo.svg";
import distrikt from "../../resources/team/distrikt_logo.svg";

export default function Team(props){

    let count = 0;

    let team = [{
        name: "Omar Hernandez",
        role: "Founder",
        position: "Founder CEO",
        image: "bizkit.svg",
        twitter: "https://twitter.com/ohsalmeron",
        linkedin: "https://www.linkedin.com/in/ohsalmeron/",
        distrikt: ""
    },{
        name: "Francisco Peguero",
        role: "Founder",
        position: "Web3 Director",
        image: "pk34.svg",
        twitter: "https://twitter.com/pk34cosmicrafts",
        linkedin: "https://linkedin/pk-p-377230238",
        distrikt: "pk34"
    },{
        name: "Kristian Rimas",
        role: "Co Founder",
        position: "Product Engineer",
        image: "kurisu.svg",
        twitter: "https://www.linkedin.com/in/kristian-erick-rimas/",
        linkedin: "https://twitter.com/kurisu9282",
        distrikt: "pk34" 
    }/*,{
        name: "Moises Lopez",
        role: "Founder",
        position: "Game Director",
        image: "frenzy.svg",
        twitter: "MoisesL28150532",
        linkedin: "moises-isai-lopez-plascencia-82a989218",
        distrikt: "frenzy"
    },{
        name: "Francisco Peguero",
        role: "Founder",
        position: "Web3 Director",
        image: "pk34.svg",
        twitter: "pk34cosmicrafts",
        linkedin: "pk-p-377230238",
        distrikt: "pk34"
    },{
        name: "Ladislao Cantarell",
        role: "Founder",
        position: "Community Director",
        image: "wos.svg",
        twitter: "woscant",
        linkedin: "ladislao-cantarell-b816bb70",
        distrikt: "WosC"
    },{
        name: "Mariano Stoll",
        role: "Co-Founder",
        position: "COO & CHRO",
        image: "stoll.svg",
        twitter: "mariano_stoll",
        linkedin: "marianostoll",
        distrikt: "stoll"
    },{
        name: "Sury Webb",
        role: "Co-Founder",
        position: "Senior Game Developer",
        image: "sury.svg",
        twitter: "tiquiciafreak",
        linkedin: "sury-oz-6286921bb",
        distrikt: "surycr"
    },{
        name: "Manuel Quintero",
        role: "Co-Founder",
        position: "Senior Game Developer",
        image: "saku.svg",
        twitter: "saku_nix",
        linkedin: "sakunix",
        distrikt: "Sakunix"
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
        twitter: "margianella",
        linkedin: "margianella",
        distrikt: "GianellaCC"
    },{
        name: "Denielle Serran",
        role: "",
        position: "Community Q&A",
        image: "cade.svg",
        twitter: "",
        linkedin: "",
        distrikt: ""
    },{
        name: "Brayan Ordaz",
        role: "Co-Founder",
        position: "Graphics & UI/UX Design",
        image: "brayan.svg",
        twitter: "thehills13",
        linkedin: "brayan-ordaz-a131b1221",
        distrikt: "Thehills"
    },{
        name: "Angel Macorra",
        role: "",
        position: "Art Producer & SCA",
        image: "macorra.svg",
        twitter: "MacorraAXII",
        linkedin: "%C3%A1ngel-iv%C3%A1n-gonz%C3%A1lez-de-la-macorra-b461a4204",
        distrikt: "Axiimacorra"
    },{
        name: "Vladimir Diaz",
        role: "Co-Founder",
        position: "3D Art Manager & S3DA",
        image: "moo.svg",
        twitter: "Sarted_Rojo",
        linkedin: "alejandro-vladimir-diaz-rojo-72320b221",
        distrikt: "Vladimir_Rojo"
    },{
        name: "Ingram Diaz",
        role: "Co-Founder",
        position: "2D Art Manager & SCA",
        image: "ingram.svg",
        twitter: "gengis_the_trap",
        linkedin: "ingram-diaz-46275a198",
        distrikt: "cephalex"
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
        twitter: "zamburts",
        linkedin: "ricardo-cervantes-quiroz-89b074238",
        distrikt: "ricardocerv14"
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
    }*/];

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
                            count++;
                            return(
                                <div className="team-slot-div" key={"member_" + count}>
                                    <img src={_img} alt={"Picture " + m.name} className="pic-team" />
                                    <label className="team-name">{m.name}</label>
                                    <label className="team-role">{m.role}</label>
                                    <label className="team-position">{m.position}</label>
                                    <img src={twitter} alt="Twitter" className="twitter-logo" onClick={() => { goTo(m.twitter); }} />
                                    <img src={linkedin} alt="LinkedIn" className="linkedin-logo" onClick={() => { goTo(m.linkedin); }} />
                                    <img src={distrikt} alt="Distrikt" className="distrikt-logo hidden" onClick={() => { goTo(m.distrikt); }} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}