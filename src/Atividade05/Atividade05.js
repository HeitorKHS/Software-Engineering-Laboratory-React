import {Link} from "react-router-dom";
import MemoryGame from "./MemoryGame";
import './Atividade05.css';

export default function Atividade05()
{
    return(
        <div className="body-atividade05">
            <h1>Atividade 05</h1>
                <MemoryGame/>
            <Link to="/">Voltar</Link>
        </div>
        );
}