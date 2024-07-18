// "use client"

// import NavList from '@/app/FrameWork/Components/WebContainers/NavList'
// import SpaceBetween from '@/app/FrameWork/Components/WebContainers/SpaceBetween'
// import { Button } from '@/components/ui/button'
// import { useAtom } from 'jotai'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import { userAtom } from '../Store/JotaiAtoms/UserAtom'
// import { useRouter } from 'next/navigation'
// import AppMenuBar from '@/app/FrameWork/Components/Shadcn/AppMenuBar'
// import RenderNavigation from '@/app/FrameWork/Components/Shadcn/RenderNavigation'
// import SimpleBottomNavigation from '@/app/FrameWork/Components/MUI/AppMenu'
// import IsAdmin from './Conditionals/IsAdmin'
// import { verifyJWT } from '@/app/FrameWork/lib/jwt'
// import axios from 'axios'
// import LoadingWrapper from '@/app/FrameWork/Components/LoadingWrapper'

// function UserNavigation() {
//     const Router = useRouter()
//     const [UserData, setUser] = useAtom(userAtom)
//     const [loggedIn, setLoggedIn] = useState(false)

//     useEffect(() => {
//         const verifyToken = async () => {
//             try {
//                 const token = document.cookie
//                     .split('; ')
//                     .find(row => row.startsWith('token='))
//                     ?.split('=')[1]

//                 if (!token) {
//                     Router.push("/login")
//                     return
//                 }

//                 await verifyJWT(token)
//                 setLoggedIn(true)
//             } catch (error) {
//                 console.error(error)
//                 setLoggedIn(false)
//                 Router.push("/login")
//             }
//         }

//         verifyToken()
//     }, [Router])

//     const handleLogout = async () => {
//         try {
//             await axios.post('/api/logout')
//             setLoggedIn(false)
//             window.location.href = '/login' // Redirect to login page after logout
//         } catch (error) {
//             console.error('Logout failed:', error)
//         }
//     }

//     if (!loggedIn) {
//         return <div>Loading...</div>
//     }

//     return (
//         <LoadingWrapper isLoading={!loggedIn}>
//             <SpaceBetween className='w-full h-[80px] bg-slate-50 px-8' >
//                 <div className='CENTER flex-row gap-4 text-sm'>
//                     <Image alt='' src="/assets/logo.svg" width={30} height={30} />
//                     <NavList />
//                 </div>
//                 <SimpleBottomNavigation />
//                 <div className='text-[25px] CENTER gap-2'>
//                     <IsAdmin>
//                         <Button><Link href="/dashboard">Dashboard</Link></Button>
//                     </IsAdmin>
//                     <div className='CENTER bg-black w-[30px] h-[30px] rounded-full text-white text-sm'>
//                         {UserData?.userName[0]}
//                     </div>
//                     <span
//                         onClick={handleLogout}
//                         className='jah duration-300 hover:cursor-pointer hover:text-AppPrimary hover:text-[32px]'
//                     >
//                         Logout
//                     </span>
//                 </div>
//             </SpaceBetween>
//         </LoadingWrapper>
//     )
// }

// export default UserNavigation

"use client"

import NavList from '@/app/FrameWork/Components/WebContainers/NavList'
import SpaceBetween from '@/app/FrameWork/Components/WebContainers/SpaceBetween'
import { Button } from '@/components/ui/button'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { userAtom } from '../Store/JotaiAtoms/UserAtom'
import { useRouter } from 'next/navigation'
import AppMenuBar from '@/app/FrameWork/Components/Shadcn/AppMenuBar'
import RenderNavigation from '@/app/FrameWork/Components/Shadcn/RenderNavigation'
import SimpleBottomNavigation from '@/app/FrameWork/Components/MUI/AppMenu'
import IsAdmin from './Conditionals/IsAdmin'
import { verifyJWT } from '@/app/FrameWork/lib/jwt'
import axios from 'axios'
import LoadingWrapper from '@/app/FrameWork/Components/LoadingWrapper'

function UserNavigation() {
    const {push} = useRouter()
    const [UserData, setUser] = useAtom(userAtom)
    const [loggedIn, setLoggedIn] = useState(true)


   useEffect(()=>{

    const fetch =async()=>{
      await axios.get('/api/auth').then(data=>{

       
        setLoggedIn(false)

      }).catch(error=>{
        setLoggedIn(false)
        push("/login")
      })

    }

    fetch()
   },[loggedIn])
          
    const handleLogout = async () => {
        try {
            await axios.post('/api/logout').then(data=>{
             
              setLoggedIn(true)
            })
          
        } catch (error) {
            console.error('Logout failed:', error)
            setLoggedIn(true)
        }
    }

 

    return (
        <LoadingWrapper isLoading={loggedIn}>
            <SpaceBetween className='w-full h-[80px]  bg-slate-50 px-8 ' >
                <div className='CENTER flex-row gap-4 text-sm'>
                    <Image alt='' src="/assets/logo.svg" width={30} height={30} />
                    <NavList />
                </div>
                <SimpleBottomNavigation />
                <div className='text-[25px] CENTER gap-2 w-[250px]'>
                    <IsAdmin>
                        <Button><Link href="/dashboard">Dashboard</Link></Button>
                    </IsAdmin>
                    <div className='CENTER bg-black w-[30px] h-[30px] rounded-full text-white text-sm'>
                        {UserData?.userName[0]}
                    </div>
                    <span
                        onClick={handleLogout}
                        className='jah duration-300 hover:cursor-pointer hover:text-AppPrimary hover:text-[32px]'
                    >
                        Logout
                    </span>
                </div>
            </SpaceBetween>
        </LoadingWrapper>
    )
}

export default UserNavigation

