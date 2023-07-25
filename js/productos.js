const productos = [
    { id: 01, nombre: "Bateria iPhone 7", precio: 11500, categoria: "Telefonía" },
    { id: 02, nombre: "Bateria iPhone 7 PLUS", precio: 12000, categoria: "Telefonía" },
    { id: 03, nombre: "Bateria iPhone 8", precio: 12000, categoria: "Telefonía" },
    { id: 04, nombre: "Bateria iPhone 8 PLUS", precio: 13000, categoria: "Telefonía" },
    { id: 05, nombre: "Bateria iPhone X", precio: 16000, categoria: "Telefonía" },
    { id: 06, nombre: "Bateria iPhone XS", precio: 17000, categoria: "Telefonía" },
    { id: 07, nombre: "Bateria iPhone XS MAX", precio: 19000, categoria: "Telefonía" },
    { id: 08, nombre: "Bateria iPhone XR", precio: 18000, categoria: "Telefonía" },
    { id: 09, nombre: "Bateria iPhone 11", precio: 25000, categoria: "Telefonía" },
    { id: 10, nombre: "Bateria iPhone 13", precio: 599.99, categoria: "29000" },
]

function guardarFavsEnLocalStorage() {
    if (favoritos.length > 0) {
        localStorage.setItem('MisFavoritos', JSON.stringify(favoritos))
    }
}

function recuperarFavoritosDeLocalStorage() {
    if (localStorage.getItem('MisFavoritos')) {
        return JSON.parse(localStorage.getItem('MisFavoritos'))
    } else {
        return []
    }
}


const favoritos = recuperarFavoritosDeLocalStorage()