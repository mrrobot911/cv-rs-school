import { useContext, useDebugValue } from "react";
import { Context } from "../utils/Context";

const useMyContext = () => {
    const { context } = useContext(Context);
    useDebugValue(context)
    return useContext(Context);
}

export default useMyContext;