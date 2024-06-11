import { GeistMono } from 'geist/font/mono'
import Link from 'next/link'
import React from 'react'

const GridFilters = () => {
  return (
    <nav>
        <Link href='#' className={`px-4 py-2 ${GeistMono.className}`}>Recent</Link>
        <Link href='#' className={`px-4 py-2 ${GeistMono.className}`}>Following</Link>
        <Link href='#' className={`px-4 py-2 ${GeistMono.className}`}>For you</Link>
    </nav>
  )
}

export default GridFilters