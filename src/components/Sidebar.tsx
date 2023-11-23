import { Ref, useEffect, useRef, useState } from "react"

export function Sidebar()
{
    const sidebarRef: Ref<HTMLDivElement> = useRef(null)

    return <div ref={sidebarRef}></div>
}