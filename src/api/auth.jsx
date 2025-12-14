import api from "@api/axios";

export const preregister = (email, name, password) => {
    api.post("/account/preregister", {
        email: email,
        name: name,
        password: password
    })
}