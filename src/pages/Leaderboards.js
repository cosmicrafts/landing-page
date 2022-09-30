import DataTable from 'react-data-table-component';
import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { idlFactory as idlScore } from './candid/score_token';
import { idlFactory as idlUser } from './candid/players_canister';
import '../assets/css/leaderboards.css';

import React, { useEffect, useState } from "react";

/// Libraries
import Lottie from "lottie-web";

/// Resources
import "../css/main.css";
import "../css/dividerThree.css";
import "../assets/css/coming-soon.css";
import shipLeft from '../resources/animations/TerraformAnim.json'
import shipRight from '../resources/animations/HawkIdle.json'
import ap320 from '../resources/animations/AP320.json'
import flashLight from '../resources/animations/Flashlights.json'

import dfinityLogo from "../resources/main/dfinity_logo.svg";
import playBtn from "../resources/main/play_btn.svg";


const betaCanisterId = "k7h5q-jyaaa-aaaan-qaaaq-cai";
const xpCanisterId = "e3q2w-lqaaa-aaaai-aazva-cai";
const playersCanisterId = "7saxw-4aaaa-aaaak-qadmq-cai";
const host = 'https://raw.ic0.app/';


function Leaderboards() {

    const [animations, setAnimations] = useState(false);

    useEffect(() => {
        if(!animations){
            setAnimations(true);
        }
    }, []);

    /*const play = () => {
        window.location.href = "https://beta.cosmicrafts.com";
    };*/

     const goTo = (url) => {
        window.open(url);
    };

    useEffect(() => {
        if(animations){
            Lottie.loadAnimation({
                container: document.querySelector("#ship-left"),
                animationData: shipLeft
            }).setSpeed(0.5);
            Lottie.loadAnimation({
                container: document.querySelector("#planet"),
                animationData: ap320
            }).setSpeed(0.3);
            Lottie.loadAnimation({
                container: document.querySelector("#ship-right"),
                animationData: shipRight
            }).setSpeed(0.4);
            Lottie.loadAnimation({
                container: document.querySelector("#flashlights"),
                animationData: flashLight
            }).setSpeed(0.4);
        }
    }, [animations]);


    // set data va a cambiar la data 
  const [data, setData] = useState ([])


//async regresa una promesa
        const getCanister = async (identity, idl, canisterId) => {
          const _canister = Actor.createActor(idl, {
              agent: new HttpAgent({
                host: host,
                identity,
              }),
              canisterId,
          });
          return _canister;
      };

      useEffect (
        //declarar funcion de forma abreviada
        ()=>{
          initializeData()
        },
        //Datos que se van a mostrar de la funcion
        []
      )
        //inicializar data de los canisters
      const initializeData = async ()=> {
        //recuperar los datos del canister de forma asyncrona
        let canisterScore = await getCanister(null,idlScore,xpCanisterId)
        // en allScores se va a guardar  .funcion interna
        let allScores = await canisterScore.getAllScores()

        let canisterUser = await getCanister(null,idlUser,playersCanisterId)

        let allPlayers = await canisterUser.getAllPlayers()

          //se renueva el valor de data
        // setData([])
// guion bajo es para variables locales _
        let _data = []


        //crear un cyclo - 3 secciones   (lenght es la longitud en JavaScript)
        //  variable;hasta cuando se ejecuta,  *++ incremento de 1 en 1
        for(let i = 0; i<allPlayers.length; i++) {

          //sacar la informacion
          _data.push (allPlayers[i][1])
      
        }

        for(let i = 0; i<_data.length; i++) {
          //hacer match con los nuevos registros *(tablas)
          //entre mas nested mas complejo  (parantesis para parametros) [posicion en un array] {encapsular if, else, for} 
          //if solo condiciona una linea abajo o usar llaves{}
          // verificar que la informacion haga match
            for(let j = 0; j<allScores.length; j++) {
            // un = es para asignar              == es para comparar informacion    === es para ser identico tambien con tipo de dato
            if (_data[i].aid == allScores[j][0])
             {  //parseInt forza a ser un entero porque tiene n al final
              _data [i].score = parseInt(allScores[j][1])
             }
          }
        }

        for(let i = 0; i<_data.length; i++) {
          if (_data[i].score == undefined || _data[i].score == null || _data[i].score <= 0 ) {
            _data[i].score = 0
          }
        }

        //pasar el data local al data global
        setData (_data.sort((a, b) => b.score - a.score))
           }

           //actualiza la informacion 
      useEffect (()=> {
                      },[data])


  const columns = [
    {
        name: 'Username',
        selector: row => row.playerName,
    },
    {
        name: 'CXP',
        selector: row => row.score.toLocaleString('en-US'),
    },
    {
      name: 'Wallet',
      selector: row => row.aid,
  },
];


  return (
    <div className="leaderboards-page">
      <div className="main-div" id="home">
            <div className="planet-div">
                <div id="planet" className="planet-center"></div>
            </div>
            <div className="ship-left-div">
                <div id="ship-left" className="ship-animation-left"></div>
            </div>
            <div className="ship-right-div">
                <div id="ship-right" className="ship-animation-right"></div>
            </div>
            <div className="flashlights-div">
                <div id="flashlights" className="flashlights"></div>
            </div>
            <div className="div-panel">
                <div className="title-div-panel">
                    <label className="title-panel">SUPERNOVA</label>
                </div>
                <div className="text-div-panel">
                    <label className="text-panel">Try our <span className="span-regular">Latest Release</span> on<br/>the <span className="span-bold">Internet Computer.</span></label>
                </div>
                <img src={dfinityLogo} className="img-dfinity-logo" alt="Dfinity logo" />
                <div className="version-div-panel">
                    <label className="version-panel">v.0.5.2.3</label>
                </div>
                <img src={playBtn} onClick={() => { goTo("https://beta.cosmicrafts.com"); }} className="play-btn-panel" alt="PLAY" />
            </div>
        </div>
            <div className="data-section">
              <div className="container">
                <header className="entry-header">
                    <h1 className="title-header">Leaderboard</h1>
                  </header>
                <DataTable
                  columns={columns}
                  data={data}
                />
              
    	     </div>
		</div>
    <div className="divider-three-background">
              <div className="logo_bkg"></div>
              <span className="v24_5">TOGETHER<br />WE GROW STRONGER!</span>
              <div className="v25_34"></div>
              <div className="v25_31"></div>
              <div className="v25_32"></div>
              <div className="v25_33"></div>
              <div className="v25_30"></div>
              <div className="v25_29"></div>
              <div className="v25_28"></div>
          </div>
	</div>

  );
}

export default Leaderboards;
