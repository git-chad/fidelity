import { GeistMono } from 'geist/font/mono'
import React from 'react'

// type Props = {}

const GridFilters = () => {
  return (
    <nav>
        <a href='#' className={`px-4 py-2 ${GeistMono.className}`}>Recent</a>
        <a href='#' className={`px-4 py-2 ${GeistMono.className}`}>Following</a>
        <a href='#' className={`px-4 py-2 ${GeistMono.className}`}>For you</a>
    </nav>
  )
}

export default GridFilters