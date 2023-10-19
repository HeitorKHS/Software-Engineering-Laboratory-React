import {Link} from "react-router-dom";
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import "./Atividade01.css";

export default function Atividade01()
{
    return(
        <div id='component'>
            <h1>Atividade 01</h1>
            <Letreiro/>
            <Relogio/>
            <Link to="/">Voltar</Link>
        </div>
        );
}