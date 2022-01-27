import React, { useState } from "react"
import { Writer } from "../../components/Writer/Writer"
import { WriterHeader } from "../../components/Writer/WriterHeader"
import DefaultLayout from "../../layout/default"

export default function HomePage() {
  return (
    <DefaultLayout>
      <WriterHeader />
      <Writer />
    </DefaultLayout>
  )
}
