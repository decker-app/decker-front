import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://127.0.0.1:8888",
    realm: "decker",
    clientId: "decker_api",
});

export default keycloak;