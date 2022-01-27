import React, { useState } from "react"
import { Sidebar } from "../components/Sidebar/Sidebar"

export default function Home() {
  return (
    <div>
      <main>
        <Sidebar />
        <div className="header bg-black" style={{ border: "1px solid red" }}>
          <div className="header-right d-flex">
            <a className="header-brand">DAYNAL</a>
            <button className="btn btn-primary">Today</button>
            <input className="form-control" type="text" placeholder="Search" />
          </div>
          <div className="header-left">
            <button>PROFILE</button>
          </div>
        </div>
        <div className="container"></div>
      </main>
    </div>
  )
}
