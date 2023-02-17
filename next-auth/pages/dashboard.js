import { useSession } from "next-auth/react"

const Dashboard = () => {
  const { data: session, status } = useSession()
  console.log({ status, session })

  return (
    <>
      {status === "loading" && <h2>Loading...</h2>}
      {!session && <h1>You are not Authorized</h1>}
      {session && status === "authenticated" && <h1>Dashboard</h1>}
    </>
  )
}

export default Dashboard
