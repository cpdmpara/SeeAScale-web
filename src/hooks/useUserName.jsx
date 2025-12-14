import { useEffect, useState } from "react";
import api from "@api/axios";

export default function useUserName() {
    const [name, setName] = useState(null);

    useEffect(() => {
        const getName = async () => {
            try {
                const response = await api.get("/account/my-name");
                setName(response.data.name);
            } catch(e) {
                console.log(e);
            }
        };

        getName();
    }, [])

    return [name];
}