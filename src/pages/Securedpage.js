import axios from "axios";
import React from "react";
import {useKeycloak} from "@react-keycloak/web";

const baseURL = "http://127.0.0.1:8080/local/me";

const Secured = () => {
    const {keycloak, initialized} = useKeycloak();
    const [me, setMe] = React.useState(null);

    axios.defaults.headers.common['Authorization'] = `Bearer ${keycloak.token}`;

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setMe(response.data);
        });
    }, []);

    return (
        <div>
            <p>{JSON.stringify(me)}</p>
        </div>
    );
};

export default Secured;