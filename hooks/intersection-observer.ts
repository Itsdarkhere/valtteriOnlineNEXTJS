'use client'
import { useEffect, useRef } from "react";

// In ts since I stole this from: https://mrcoles.com/intersection-observer-react-hook/
// And didnt bother changing things around
export type OnIntersect = (elt: HTMLElement) => void;
/**
 * Hook for running an IntersectionObserver.
 * @param onIntersect this is used in the deps of useEffect, you can
 *                    employ useCallback to prevent it from running
 *                    after every render
 * @param args
 * @returns an HTMLElement `ref`, make sure to set it to a component
 */
export const useIntersectionObserver = (
    onIntersect: OnIntersect,
    {
        threshold = 0,
        root = null,
        rootMargin = undefined,
    }: IntersectionObserverInit = {}
) => {
    const ref = useRef<HTMLElement>();
    let observer: IntersectionObserver;

    useEffect(() => {
        if (window.IntersectionObserver) {
            const callback: IntersectionObserverCallback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onIntersect(entry.target as HTMLElement);
                        observer.unobserve(entry.target);
                    }
                });
            };

            const args = { threshold, root, rootMargin };
            observer = new IntersectionObserver(callback, args);
            observer.observe(ref.current as HTMLElement);

            return () => observer.disconnect();
        }
    }, [onIntersect, JSON.stringify(threshold), root, rootMargin])

    return ref;
}