/* ======================================================
   DASHBOARD.JS
   Geovisualizador Machala
   ====================================================== */

// =======================
// DATOS DEL PROYECTO
// =======================

const dashboardData = {

    nombre: "Área de Estudio",

    area: "213.09 ha",

    poblacion: 45055,

    manzanas: 179,

    densidad: (45055/213.09).toFixed(1),

    usoSuelo:{

        labels:[
            "Residencial",
            "Comercial",
            "Equipamiento",
            "Áreas Verdes",
            "Red Vial",
            "Vacante"
        ],

        valores:[
            71.98,
            4.72,
            3.47,
            2.20,
            11.49,
            6.25
        ],

        colores:[
            "#2E7D32",
            "#F9A825",
            "#1E88E5",
            "#66BB6A",
            "#757575",
            "#BDBDBD"
        ]

    },

    educacion:{

        radio:"300 m",

        cobertura:65.36,

        manzanas:117

    },

    salud:{

        radio:"600 m",

        cobertura:44.69,

        manzanas:80

    },

    areasVerdes:{

        area:"46 821.93 m²",

        indicador:"1.04",

        deficit:"35.87 ha"

    },

    riesgo:{

        manzanas:20,

        habitantes:1852,

        area:"154 293.19 m²"

    }

};

//==================================
// LLENAR TARJETAS
//==================================

function cargarIndicadores(){

document.getElementById("txtArea").innerHTML=dashboardData.area;

document.getElementById("txtPoblacion").innerHTML=
dashboardData.poblacion.toLocaleString();

document.getElementById("txtManzanas").innerHTML=
dashboardData.manzanas;

document.getElementById("txtDensidad").innerHTML=
dashboardData.densidad+" hab/ha";

document.getElementById("eduRadio").innerHTML=
dashboardData.educacion.radio;

document.getElementById("eduCobertura").innerHTML=
dashboardData.educacion.cobertura+" %";

document.getElementById("eduManzanas").innerHTML=
dashboardData.educacion.manzanas;

document.getElementById("salRadio").innerHTML=
dashboardData.salud.radio;

document.getElementById("salCobertura").innerHTML=
dashboardData.salud.cobertura+" %";

document.getElementById("salManzanas").innerHTML=
dashboardData.salud.manzanas;

document.getElementById("greenArea").innerHTML=
dashboardData.areasVerdes.area;

document.getElementById("greenValue").innerHTML=
dashboardData.areasVerdes.indicador;

document.getElementById("greenDeficit").innerHTML=
dashboardData.areasVerdes.deficit;

document.getElementById("riskM").innerHTML=
dashboardData.riesgo.manzanas;

document.getElementById("riskH").innerHTML=
dashboardData.riesgo.habitantes;

document.getElementById("riskA").innerHTML=
dashboardData.riesgo.area;

}

//==================================
// GRAFICO
//==================================

let grafico;

function crearGrafico(){

const ctx=document.getElementById("usoSueloChart");

grafico=new Chart(ctx,{

type:"doughnut",

data:{

labels:dashboardData.usoSuelo.labels,

datasets:[{

data:dashboardData.usoSuelo.valores,

backgroundColor:dashboardData.usoSuelo.colores,

borderWidth:1

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom"

}

},

cutout:"60%"

}

});

}

//==================================
// ANIMAR BARRAS
//==================================

function animarBarras(){

document.querySelector(".educacion").style.width=
dashboardData.educacion.cobertura+"%";

document.querySelector(".educacion").innerHTML=
dashboardData.educacion.cobertura+"%";

document.querySelector(".salud").style.width=
dashboardData.salud.cobertura+"%";

document.querySelector(".salud").innerHTML=
dashboardData.salud.cobertura+"%";

}

//==================================
// BOTON
//==================================

function toggleDashboard(){

const panel=document.getElementById("dashboard");

if(panel.style.right==="-420px"){

panel.style.right="10px";

}else{

panel.style.right="-420px";

}

}

//==================================
// INICIO
//==================================

window.onload=function(){

cargarIndicadores();

crearGrafico();

animarBarras();

};
