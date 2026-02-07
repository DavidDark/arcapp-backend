const { Router } = require('express');
const router = Router();

router.get('/', [], async (req, res) => {
    const product_lst = [
        {
            nombre: "MCCAIN PAPA FRANCESA 3/8 SIGNATURE C/2.27 KG",
            existencias: 200,
            area: "congelador",
            ubicacion: "-",
            matriz: 0
        },
        {
            nombre: "REYMA CONTENEDOR 7X7 LISO HC771 PZ",
            existencias: 300,
            area: "desechables|tienda",
            ubicacion: "N2|R0-N4|R1-N4",
            matriz: 300
        },
        {
            nombre: "VIRMAR ADEREZO SABOR QUESO 1.1 KG PZ",
            existencias: 0,
            area: "-",
            ubicacion: "-",
            matriz: 10
        },
        {
            nombre: "BOLSA CAMISETA CHICA 25X40",
            existencias: 500,
            area: "proveedores|tienda",
            ubicacion: "R7-N0|R0-N1",
            matriz: 200
        },
        {
            nombre: "BOLSA CAMISETA MEDIANA 25X50",
            existencias: 100,
            area: "tienda",
            ubicacion: "R0-N1",
            matriz: 300
        },
    ];


    res.json({
        products: product_lst,
    });
});

router.get('/find/:nombre', [], async (req, res) => {
    const nombre = req.params.nombre;
    const product_lst = [
        {
            nombre: "MCCAIN PAPA FRANCESA 3/8 SIGNATURE C/2.27 KG",
            existencias: 200,
            area: "congelador",
            ubicacion: "-",
            matriz: 0
        },
        {
            nombre: "REYMA CONTENEDOR 7X7 LISO HC771 PZ",
            existencias: 300,
            area: "desechables|tienda",
            ubicacion: "N2|R0-N4|R1-N4",
            matriz: 300
        },
        {
            nombre: "VIRMAR ADEREZO SABOR QUESO 1.1 KG PZ",
            existencias: 0,
            area: "-",
            ubicacion: "-",
            matriz: 10
        },
        {
            nombre: "BOLSA CAMISETA CHICA 25X40",
            existencias: 500,
            area: "proveedores|tienda",
            ubicacion: "R7-N0|R0-N1",
            matriz: 200
        },
        {
            nombre: "BOLSA CAMISETA MEDIANA 25X50",
            existencias: 100,
            area: "tienda",
            ubicacion: "R0-N1",
            matriz: 300
        },
    ];

    const product = product_lst.filter(
        prod => {
            return prod.nombre.toLowerCase().includes(nombre.toLowerCase());
        }
    );

    res.json({
        product,
    });
});

module.exports = router;