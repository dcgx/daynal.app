import React from "react"
import { Button } from "../Button/Button"
import { useNavigate } from "react-router-dom"

export const WriterHeader = () => {
  const navigate = useNavigate()

  const handleDone = () => {
    console.log("handleSaveNote")
  }

  const handleDiscard = () => {
    navigate("/")
  }
  return (
    <div className="navbar mx-4" style={{ height: "70px" }}>
      <h5>Monday 21 sep 2021</h5>
      <div>
        <Button className="mx-2" variant="text" onClick={handleDiscard}>
          Discard
        </Button>
        <Button className="mx-2" onClick={handleDone}>
          Done
        </Button>
      </div>
    </div>
  )
}
