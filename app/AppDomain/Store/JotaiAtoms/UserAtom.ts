// src/atoms/userAtoms.ts
import { atom } from 'jotai';
import { userRoles } from '../../Types/Types';

 type User ={
  userName: string;
  surname: string;
  email: string;
  role: userRoles | null;
}


type UserRegister = Omit<User,'role'>

export const isLoggedInAtom = atom(false);

export const userAtom = atom<User | null>(null);