import Link from 'next/link'
import React from 'react'

export default function Head() {
  return (
    <>
    <title>My app</title>
    <meta content='width=device-width, initial-scale=1' name='viewport' />
    <meta name='description' content='Gerated by Olek' />
    <Link rel='icon' href='/favicon.ico' />
    </>
  )
}
