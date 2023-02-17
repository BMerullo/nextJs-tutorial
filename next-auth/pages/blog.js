import React from "react"
import { getSession, useSession } from "next-auth/react"

const Blog = ({ data }) => {
  const { data: session, status } = useSession()
  console.log({ session, status })
  return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
      data: session
        ? `List of 100 personalised blogs for ${session.user.name}`
        : "List of free blogs",
    },
  }
}
