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
                    <Link to="/Atividade02">Atividade 02 - </Link>
                </li>
            </nav>
        </div>
    );
}

export default Home;