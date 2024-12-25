import { useEffect, useState } from "react";
import { MENU_API_1, MENU_API_2 } from "./Constants";

const useResturentMenu = (resid) => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    })
    const fetchMenu = async () => {
        const data = await fetch(MENU_API_1 + resid + MENU_API_2);
        const json = await data.json();
        setresInfo(json);
    }
    return resInfo;
}

export default useResturentMenu;