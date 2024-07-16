// src/atoms/userAtoms.ts
import { atom } from 'jotai';
import { userRoles, UserType } from '../../Types/Types';




type UserRegister = Omit<UserType,'role'>

export const isLoggedInAtom = atom(false);

export const userAtom = atom<UserType | null>(null);