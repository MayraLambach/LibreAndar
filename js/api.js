
let seccionColectivos = document.getElementById("colectivos-id")
let contenedorColectivos = document.createElement('div')
contenedorColectivos.classList.add('flex-container')

//consumir datos de un json
async function cargarJSON() {
    try {
        const response = await fetch ('js/colectivos.json');
        const data = await response.json()
        console.log("funca?")
        console.log(data)
        data.forEach(colectivo => {
            contenedorColectivos.innerHTML += `
            <div class="item">
                <div class="image-container">
                    <img class="bondi-img" src="${colectivo.imagen}" alt="${colectivo.alt}" width="100"></img>
                </div>
                <h2>${colectivo.linea}</h2>
                 <h3 class="item-tit">Accesibilidad</h3>
                 <p class="descripcion-item">
                     Unidades accesibles: ${colectivo.accesible ? "SI" : "NO"}</br>
                     Tipo de rampa: ${colectivo.tipoRampa}
                 </p>
                <a href="${colectivo.recorrido}">
                <button id="btn-recorrido" class="bt-item">Ver recorrido</button>
                </a> 
                </div>
        `;
        seccionColectivos.append(contenedorColectivos);   
        })

    } catch (error) {
        
    }
}

document.addEventListener('DOMContentLoaded', cargarJSON)