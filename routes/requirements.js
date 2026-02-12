const { Router } = require('express');
const router = Router();

router.get('/', [], async (req, res) => {
    const requirement_lst = [
        {
            nombre: "MCCAIN PAPA FRANCESA 3/8 SIGNATURE C/2.27 KG",
            cantidad: "10 piezas",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: false
        },
        {
            nombre: "REYMA CONTENEDOR 7X7 LISO HC771 PZ",
            cantidad: "2 bultos",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: false
        },
        {
            nombre: "VIRMAR ADEREZO SABOR QUESO 1.1 KG PZ",
            cantidad: "1 pieza",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: false
        },
        {
            nombre: "BOLSA CAMISETA CHICA 25X40",
            cantidad: "10 kg",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: false
        },
        {
            nombre: "BOLSA CAMISETA MEDIANA 25X50",
            cantidad: "1 kg",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: true
        },
    ];


    res.json({
        requirements: requirement_lst,
    });
});

router.get('/find/:nombre', [], async (req, res) => {
    const nombre = req.params.nombre;
    const requirement_lst = [
        {
            nombre: "MCCAIN PAPA FRANCESA 3/8 SIGNATURE C/2.27 KG",
            cantidad: "10 piezas",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: false
        },
        {
            nombre: "REYMA CONTENEDOR 7X7 LISO HC771 PZ",
            cantidad: "2 bultos",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: false
        },
        {
            nombre: "VIRMAR ADEREZO SABOR QUESO 1.1 KG PZ",
            cantidad: "1 pieza",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: false
        },
        {
            nombre: "BOLSA CAMISETA CHICA 25X40",
            cantidad: "10 kg",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: false
        },
        {
            nombre: "BOLSA CAMISETA MEDIANA 25X50",
            cantidad: "1 kg",
            cliente: "Susushi",
            hora: "07:01:00",
            autorizado: true
        },
    ];

    const requirement = requirement_lst.filter(
        requrmnt => {
            return requrmnt.nombre.toLowerCase().includes(nombre.toLowerCase());
        }
    );

    res.json({
        requirement,
    });
});

module.exports = router;