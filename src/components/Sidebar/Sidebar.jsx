import React from "react"
import { AiOutlinePlus } from "react-icons/ai"

import { SidebarNoteList } from "./SidebarNoteList"
import { SidebarNoteListItem } from "./SidebarNoteListItem"
import { Button } from "../Button/Button"
import "./styles.scss"
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h4>
          <span>Hello ✌, Juanito</span>
        </h4>
        <Button>Sign Out</Button>
      </div>

      <div className="newNote" onClick={() => navigate("/writer")}>
        <AiOutlinePlus size={30} />
        <p>Create a new note</p>
      </div>

      <SidebarNoteList className="mt-5">
        <SidebarNoteListItem></SidebarNoteListItem>
      </SidebarNoteList>
    </aside>
  )
}
