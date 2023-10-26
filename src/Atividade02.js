import {Link} from "react-router-dom";
import Contador from "./Contador";
import "./Atividade02.css";


export default function Atividade02()
{
    return(
        <div className="home-atividade2">
            <h2>Atividade 02 - Contadaor</h2>
            <Contador/>
            <Link to="/">Voltar</Link>
        </div>
        );
}