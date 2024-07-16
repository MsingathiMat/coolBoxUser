import React from 'react'
import { UserRole } from '../../AppDeclarations/Constants'
import { useAtom } from 'jotai'
import { userAtom } from '../../Store/JotaiAtoms/UserAtom'

function IsAdmin({children}:{children:React.ReactNode}) {
    const [UserData,setUser] = useAtom(userAtom)
  return (
   <>
   {

UserData?.role=== UserRole.Admin?children:null
   }
   </>
  )
}

export default IsAdmin
