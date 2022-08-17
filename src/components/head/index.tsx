import React from 'react'
import NextHead from 'next/head'

type Props = {
  title: string
}

const Head: React.FC<Props> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </NextHead>
  )
}

export default Head
