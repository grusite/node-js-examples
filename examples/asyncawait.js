// const sleep(2000) = new Promise(resolve, ms )

// Me quedé dormido y no terminé esta parte

const writFile = (nombreFichero, texto){
    if (err){
        rejects(err)
    }

}

async function main(){
    console.log("empiezo");
    for(let i=0;i<5;i++){
        await sleep(2000)
        console.log("sigo")
    }

    await writeFile("pepe.txt","hola");

    console.log("terminado");
}

main.catch(err => {
    console.log("Hubo un error ", err)
}) 