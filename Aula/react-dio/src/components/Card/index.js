import {useState} from 'react';



const Card = () => {

    const [valor, setValor] = useState(0)

    const Adicionar = () => {
        setValor(valor + 1)
    }
    const Remover = () => {
        setValor(valor - 1)
    }


    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro Card
        </div>
        <div className="card-body">
            <button 
                type="button" 
                className="btn btn-success" onClick={Adicionar}
            >   Adicionar
            </button>
            <button 
                type="button" 
                className="btn btn-danger"
                onClick={Remover}
            >   Remover
            </button>
            <p className="card-text">{valor}</p>

        </div>
</div>
    )
}

export default Card