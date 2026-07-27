/* ======================================================
   DASHBOARD.JS
   GEOVISUALIZADOR MACHALA
   ====================================================== */


/* ======================================================
   DATOS DEL PROYECTO
   ====================================================== */

const dashboardData = {

    nombre: "Área de Estudio",

    area: "213.09 ha",

    poblacion: 45055,

    manzanas: 179,

    densidad: (45055 / 213.09).toFixed(1),


    /* ==================================================
       USO DEL SUELO
       ================================================== */

    usoSuelo: {

        labels: [
            "Residencial",
            "Comercial",
            "Equipamiento",
            "Áreas Verdes",
            "Red Vial",
            "Vacante"
        ],

        valores: [
            71.98,
            4.72,
            3.47,
            2.20,
            11.49,
            6.24
        ],

        /* PALETA CARTOGRÁFICA */

        colores: [
            "#F4D03F",  // Residencial
            "#E74C3C",  // Comercial
            "#3498DB",  // Equipamiento
            "#27AE60",  // Áreas verdes
            "#566573",  // Red vial
            "#D5D8DC"   // Vacante
        ]

    },


    /* ==================================================
       EDUCACIÓN
       ================================================== */

    educacion: {

        radio: "300 m",

        cobertura: 65.36,

        manzanas: 117

    },


    /* ==================================================
       SALUD
       ================================================== */

    salud: {

        radio: "600 m",

        cobertura: 44.69,

        manzanas: 80

    },


    /* ==================================================
       ÁREAS VERDES
       ================================================== */

    areasVerdes: {

        area: "46 821.93 m²",

        indicador: "1.04",

        deficit: "35.87 ha"

    },


    /* ==================================================
       RIESGO DE INUNDACIÓN
       ================================================== */

    riesgo: {

        manzanas: 20,

        habitantes: 1852,

        area: "154 293.19 m²"

    }

};


/* ======================================================
   CARGAR INDICADORES
   ====================================================== */

function cargarIndicadores() {

    const txtArea = document.getElementById("txtArea");

    if (txtArea) {
        txtArea.innerHTML = dashboardData.area;
    }


    const txtPoblacion = document.getElementById("txtPoblacion");

    if (txtPoblacion) {
        txtPoblacion.innerHTML =
            dashboardData.poblacion.toLocaleString("es-ES");
    }


    const txtManzanas = document.getElementById("txtManzanas");

    if (txtManzanas) {
        txtManzanas.innerHTML =
            dashboardData.manzanas;
    }


    const txtDensidad = document.getElementById("txtDensidad");

    if (txtDensidad) {
        txtDensidad.innerHTML =
            dashboardData.densidad + " hab/ha";
    }


    /* EDUCACIÓN */

    const eduRadio = document.getElementById("eduRadio");

    if (eduRadio) {
        eduRadio.innerHTML =
            dashboardData.educacion.radio;
    }


    const eduCobertura = document.getElementById("eduCobertura");

    if (eduCobertura) {
        eduCobertura.innerHTML =
            dashboardData.educacion.cobertura + " %";
    }


    const eduManzanas = document.getElementById("eduManzanas");

    if (eduManzanas) {
        eduManzanas.innerHTML =
            dashboardData.educacion.manzanas;
    }


    /* SALUD */

    const salRadio = document.getElementById("salRadio");

    if (salRadio) {
        salRadio.innerHTML =
            dashboardData.salud.radio;
    }


    const salCobertura = document.getElementById("salCobertura");

    if (salCobertura) {
        salCobertura.innerHTML =
            dashboardData.salud.cobertura + " %";
    }


    const salManzanas = document.getElementById("salManzanas");

    if (salManzanas) {
        salManzanas.innerHTML =
            dashboardData.salud.manzanas;
    }


    /* ÁREAS VERDES */

    const greenArea = document.getElementById("greenArea");

    if (greenArea) {
        greenArea.innerHTML =
            dashboardData.areasVerdes.area;
    }


    const greenValue = document.getElementById("greenValue");

    if (greenValue) {
        greenValue.innerHTML =
            dashboardData.areasVerdes.indicador;
    }


    const greenDeficit = document.getElementById("greenDeficit");

    if (greenDeficit) {
        greenDeficit.innerHTML =
            dashboardData.areasVerdes.deficit;
    }


    /* RIESGO */

    const riskM = document.getElementById("riskM");

    if (riskM) {
        riskM.innerHTML =
            dashboardData.riesgo.manzanas;
    }


    const riskH = document.getElementById("riskH");

    if (riskH) {
        riskH.innerHTML =
            dashboardData.riesgo.habitantes.toLocaleString("es-ES");
    }


    const riskA = document.getElementById("riskA");

    if (riskA) {
        riskA.innerHTML =
            dashboardData.riesgo.area;
    }

}


/* ======================================================
   GRÁFICO DE USO DEL SUELO
   ====================================================== */

let grafico;


function crearGrafico() {

    const canvas =
        document.getElementById("usoSueloChart");


    /* Si no existe el canvas, no hacemos nada */

    if (!canvas) {
        return;
    }


    /* Si Chart.js no está cargado */

    if (typeof Chart === "undefined") {

        console.error(
            "Chart.js no está cargado."
        );

        return;

    }


    grafico = new Chart(canvas, {

        type: "doughnut",

        data: {

            labels:
                dashboardData.usoSuelo.labels,

            datasets: [{

                data:
                    dashboardData.usoSuelo.valores,

                backgroundColor:
                    dashboardData.usoSuelo.colores,

                borderColor: "#FFFFFF",

                borderWidth: 3,

                hoverOffset: 10

            }]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "58%",


            animation: {

                animateRotate: true,

                animateScale: true,

                duration: 1200

            },


            plugins: {

                legend: {

                    position: "bottom",

                    labels: {

                        padding: 12,

                        usePointStyle: true,

                        pointStyle: "circle",

                        font: {

                            size: 12

                        }

                    }

                },


                tooltip: {

                    callbacks: {

                        label: function(context) {

                            return (
                                " " +
                                context.label +
                                ": " +
                                context.raw +
                                "%"
                            );

                        }

                    }

                }

            }

        }

    });

}


/* ======================================================
   BARRAS DE COBERTURA
   ====================================================== */

function animarBarras() {

    const barraEducacion =
        document.querySelector(".educacion");


    if (barraEducacion) {

        barraEducacion.style.width =
            dashboardData.educacion.cobertura + "%";

        barraEducacion.innerHTML =
            dashboardData.educacion.cobertura + "%";

    }


    const barraSalud =
        document.querySelector(".salud");


    if (barraSalud) {

        barraSalud.style.width =
            dashboardData.salud.cobertura + "%";

        barraSalud.innerHTML =
            dashboardData.salud.cobertura + "%";

    }

}


/* ======================================================
   ABRIR / CERRAR DASHBOARD
   ====================================================== */

function toggleDashboard() {

    const panel =
        document.getElementById("dashboard");


    if (!panel) {
        return;
    }


    if (
        panel.style.right === "-420px" ||
        panel.style.right === ""
    ) {

        panel.style.right = "10px";

    }

    else {

        panel.style.right = "-420px";

    }

}


/* ======================================================
   INICIAR DASHBOARD
   ====================================================== */

function iniciarDashboard() {

    cargarIndicadores();

    crearGrafico();

    animarBarras();

}


/* ======================================================
   ESPERAR A QUE CARGUE LA PÁGINA
   ====================================================== */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        iniciarDashboard
    );

}

else {

    iniciarDashboard();

}
