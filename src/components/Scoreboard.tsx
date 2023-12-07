import { Ref, useEffect, useRef, useState } from "react"
import "./Scoreboard.css";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { CrabeState } from "../types/state";
export function Scoreboard()
{
    const scoreboardRef: Ref<HTMLDivElement> = useRef(null)
    // const world 0= useSelector((state: CrabeState) => state.world)
    // let nameLeftTeam
    // let nameRightTeam
    // if(world.state.positiveHalf === "yellow"){
    //     nameLeftTeam = ('tIGERS')
    //     nameRightTeam = ('NAMeC')
    // }else{
    //     nameLeftTeam = ('NAMeC')
    //     nameRightTeam = ('tIGERS')
    // }
    let nameLeftTeam = ('NAMeC')
    let nameRightTeam = ('TIGERS')
    scoreboardRef.current

    return (<div ref={scoreboardRef} className="mainScore">
            <div className="containerScore">
            <div className="Team yellow">
                <h3 className="nameTeam">{nameLeftTeam}</h3>
                <h3 className="scoreTeam">5</h3>
                </div>
                <div className="time">
                    <h3 id="time">15 : 25</h3>
                    </div>
                    <div className="Team blue">
                        <h3 className="scoreTeam">4</h3>
                        <h3 className="nameTeam">{nameRightTeam}</h3>
                        </div>
            </div>
        </div>
    )
}