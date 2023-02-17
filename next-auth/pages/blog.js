import React from "react"
import { getSession } from "next-auth/react"

const Blog = () => {
  return <h1>Blog page</h1>
}

export default Blog

export async function getServerSideProps(context) {
  const session = getSession(context)
  return {
    props: {
      data: session ? "List of 100 personalised blogs" : "List of free blogs",
    },
  }
}
