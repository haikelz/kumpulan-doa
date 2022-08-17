import { ReactNode } from "react";

export interface Doa {
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

export interface DetailDoa {
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

export interface Item {
    item: {
        id_doa: string;
        nama: string;
        lafal: string;
        transliterasi: string;
        arti: string;
    };
}

export interface Layout {
    children: ReactNode[] | JSX.Element;
    title: string;
}

export interface DetailPaths {
    id_doa: string;
}

export interface Context {
    params: {
        id: string;
    }
}

export interface Search {
    setSearch: (value: string) => void;
}

export interface Event {
    target: {
        value: string;
    }
}

export interface ModalKeterangan {
    keterangan: string[];
}