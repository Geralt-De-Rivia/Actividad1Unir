
const autor = {
    nombre: 'William',
    apellido: 'Mahecha',
    date: new Date(),
};

const anoFecha = (fecha) => {
    let anio = fecha.getFullYear();
    return anio;
}

function Footer() {
    return <footer className="footer bg-dark rounded-top text-center fixed-bottom">
        <div className="container py-2">
            <p className="text-white my-2">
            &copy; {autor.nombre} {autor.apellido} {anoFecha(autor.date)}
            </p>
        </div>
    </footer>;
}

export default Footer;