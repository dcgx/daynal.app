import React from "react"

export const SidebarNoteListItem = () => {
  return (
    <div className="sidebar-note-list-item">
      <img
        className="sidebar-note-list-item__cover"
        src="https://picsum.photos/30/90"
        alt="Image"
        width={50}
      />
      <div className="sidebar-note-list-item__wrapper">
        <h5 className="sidebar-note-list-item__title">Listado inicial</h5>
        <p className="sidebar-note-list-item__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          expedita, illo aperiam at iure iste minima ex debitis facere minus
          eaque quae eligendi ipsam! Dicta placeat dolore dolorem mollitia
          illum?
        </p>
      </div>
      <button className="sidebar-note-list-item__remove-button">X</button>
    </div>
  )
}
