import { atom } from "jotai";

export const filterAtom = atom("");
export const filteredAtom = atom((get: any) => get.nama.toLowerCase().includes(get(filterAtom).toLowerCase()))