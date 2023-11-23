import { Ref, useEffect, useRef, useState } from "react"
import logo_crabe from "../image.png"
export function Scoreboard()
{
    const scoreboardRef: Ref<HTMLDivElement> = useRef(null)

    scoreboardRef.current

    return <div ref={scoreboardRef} className="logo"><img src={logo_crabe}/></div>
}