import React from "react"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Navbar } from "../components/Navbar/Navbar"

const DefaultLayout = (props) => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <main>
        {/* <Navbar /> */}

        <section>{props.children}</section>
      </main>
    </div>
  )
}

DefaultLayout.propTypes = {}

export default DefaultLayout
