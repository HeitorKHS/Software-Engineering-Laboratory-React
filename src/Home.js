import React from "react";
import {Link} from "react-router-dom";

const Home = () =>
{
    return(
        <div>
            <nav>
                <li>
                    <Link to="/Atividade01">Atividade 01 - Relógio e letreiro</Link>
                </li>
                <li>
                    <Link to="/Atividade02">Atividade 02 - Contador de pessoas</Link>
                </li>
                <li>
                    <Link to="/Atividade03">Atividade 03 - Componentes</Link>
                </li>
                <li>
                    <Link to="/Atividade04">Atividade 04 - Calculadora</Link>
                </li>
                <li>
                    <Link to="/Atividade05">Atividade 05 - Jogo da memória</Link>
                </li>
            </nav>
        </div>
    );
}

export default Home;