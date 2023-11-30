import { Ref, useEffect, useRef, useState } from "react"
import "./Scoreboard.css";
// import nameAlly from "../types/world"
export function Scoreboard()
{
    const scoreboardRef: Ref<HTMLDivElement> = useRef(null)

    scoreboardRef.current

    return (<div ref={scoreboardRef} className="containerScore"></div>
    )
}