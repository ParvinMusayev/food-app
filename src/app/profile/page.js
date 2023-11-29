"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { redirect } from "next/navigation"

export default function ProfilePage() {
    const session = useSession()
    const {status} = session
    console.log(session)
    

    if(status === "loading"){
        return "Loading..."
    }

    if (status === 'unauthenticated') {
        return redirect('/login')
    }

    const userImage = session.data?.user?.image

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Profile
            </h1>

            <form className="max-w-xs mx-auto border">
                <div>
                    <div className="">
                        <Image src={userImage} alt={"avatar"} width={64} height={64} />
                    </div>
                </div>

            </form>
        </section>
    )
}