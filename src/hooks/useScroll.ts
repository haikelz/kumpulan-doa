import { useAtom } from "jotai"
import { useCallback, useEffect } from "react";
import { scrollAtom } from "src/store"
import { useAtomCallback } from "jotai/utils";

type HandleScroll = (args?: unknown) => void | Promise<void>;

export const useScroll = () => {
    const [scroll, setScroll] = useAtom(scrollAtom);

    const handleScroll: HandleScroll = useAtomCallback(
        useCallback(() => {
            const position: number = window.pageYOffset;
            setScroll(position);
        }, [setScroll])
    )

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll])

    return [scroll, setScroll] as const;
}