function ItemNavegacion ({texto, seccionActiva, onClick}){
    return (
        <li className={seccionActiva ? "izq_item active" : "izq_item"} onClick={onClick}>
            {texto}
        </li>
    );
}

export default ItemNavegacion;