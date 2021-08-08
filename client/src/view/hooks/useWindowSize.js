import {useState,useEffect} from "react";

const useWindowSize = () => {
    const [sizes,setSizes] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const changeWindowSizes = () => {
            setSizes({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", changeWindowSizes);
        return () => {
            window.removeEventListener("resize", changeWindowSizes)
        }
    },[])

    return sizes
}

export default useWindowSize;