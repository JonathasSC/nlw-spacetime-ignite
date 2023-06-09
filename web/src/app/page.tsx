import { cookies } from 'next//headers'

import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { CreateAccount } from '@/components/CreateAccount'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Profile } from '@/components/Profile'

export default function Home() {
  const isAuthenticate = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16 ">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {isAuthenticate ? <Profile /> : <CreateAccount />}
        <Hero />
        <Copyright />
      </div>
      <div className="flex flex-col p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
