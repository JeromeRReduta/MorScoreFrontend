import { useContext } from "react";
import JwtContext from "./JwtContext.js";

export default function useJwt() {
    const context = useContext(JwtContext);
    if (!context) {
        throw Error("No provider given for useJwt!");
    }
    return context;
}
