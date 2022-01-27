import React from "react"
import "./styles.scss"

import { WriterCover } from "./WriterCover"
import { WriterForm } from "./WriterForm"

export const Writer = () => {
  return (
    <div className="writer">
      <WriterCover />
      <WriterForm />
    </div>
  )
}
