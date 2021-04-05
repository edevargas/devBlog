import { useState, useEffect } from "react";

const useWindowSize = () => {
    const desktopSize = 800
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [isDesktop, setDesktop] = useState(window.innerWidth >= desktopSize)
    const updateDimensions = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setDesktop(window.innerWidth >= desktopSize)
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return { width, height, isDesktop }
}

export default useWindowSize