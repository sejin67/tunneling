import { atom } from "jotai"
import { Info } from "../types/info";


export const infosAtom = atom<Info[] | null>(null);
export const selectInfoAtom = atom<Info | null>(null); //(null)로 초기화

export const underwayInfosAtom = atom<Info[] | null>(null);
export const selectUnderwayInfoAtom = atom<Info | null>(null); //(null)로 초기화