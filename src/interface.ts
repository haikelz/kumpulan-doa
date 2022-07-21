import { ReactNode } from "react";

export interface Idoa {
    doa: [
        {
            id_doa: string;
            nama: string;
            lafal: string;
            transliterasi: string;
            arti: string;
            kata_kunci: string[];
            keterangan: string[];
        }
    ];
    search: string;
}

export interface Iddetaildoa {
    item: {
        id_doa: string;
        nama: string;
        lafal: string;
        transliterasi: string;
        arti: string;
        kata_kunci: string[];
        keterangan: string[];
    }
}

export interface Iitem {
    item: {
        id_doa: string;
        nama: string;
        lafal: string;
        transliterasi: string;
        arti: string;
    }
}

export interface Ilayout {
    children: ReactNode[] | JSX.Element;
    title: string;
}

export interface Idetail {
    id_doa: string;
}

export interface Icontext {
    params: {
        id: string;
    }
}

export interface Isearch {
    setSearch: (value: string) => void;
}

export interface Ievent {
    target: {
        value: string;
    }
}