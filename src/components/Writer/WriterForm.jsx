import React from "react"

export const WriterForm = () => {
  return (
    <form className="writer-form">
      <input
        className="writer-form__input-title"
        type="text"
        placeholder="Title ..."
        name="title"
      />

      <textarea
        className="writer-form__content"
        placeholder="What happened today?"
        name="content"
      />
    </form>
  )
}
