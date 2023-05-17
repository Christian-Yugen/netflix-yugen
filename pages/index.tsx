import { signOut } from "next-auth/react"


export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-green-500">Hello Netflix Yugen</h1>
      <button onClick={() => signOut()}>Logout!</button>
    </>
  )
}
