import {Link} from "react-router-dom";
import Calculator from "./Calculator";
import './Atividade04.css';

export default function Atividade04()
{
    return(
        <div className="Calculator-wrapper">
            <h1>Atividade 04</h1>
                <Calculator/>
            <Link to="/">Voltar</Link>
        </div>
        );
}