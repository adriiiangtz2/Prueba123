console.log("Corriendo..");



// const cargarCampeones = async() => {
//     try {
//         console.log("Paso");
//         const respuesta = await fetch('https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/Z7yWikxpT4d8OERCYis5H3LpSO3fXYpt67xIimGITuC1LilCgdlkx55YbLJE929L4yo0HM19-23FZw?api_key=RGAPI-099aeeef-e5bb-4f0c-9b13-d765194a2819');
//         console.log(respuesta);
//         // if (respuesta.)
//         const resp = await respuesta.json();
//         console.log(resp);
        
//     } catch (error) {
//         console.log("Error");
//         console.log(error );
        
//     }
// };
// cargarCampeones();


console.log("Otra promesa");
fetch("users/api.php").then(response =>{
    console.log(response.json);
    console.log("si");
    return response.json();
}).then(users =>{
    console.log("no");
    console.log(users);
});