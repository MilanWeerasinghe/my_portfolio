import { useEffect, useState } from "react";

export const useIsVisible = (ref) => {
    const [hasIntersected, setHasIntersected] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHasIntersected(true);
            }
        });

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return hasIntersected;
};


