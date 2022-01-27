import React from "react"

export const WriterCover = () => {
  return (
    <div
      className="writer-cover"
      style={{ position: "relative", width: "calc(100vw - 400px)" }}
    >
      <img
        src="https://picsum.photos/1200/300"
        style={{ width: "calc(100vw - 400px)", height: "200px" }}
        alt="Image"
      />
      <button style={{ position: "absolute", top: "0", right: "0" }}>
        Editar
      </button>
    </div>
  )
}
