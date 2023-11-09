import {Link} from "react-router-dom";
import Gallery from "./Gallery.js";
import {Profile} from "./Gallery.js";
import Avatar from "./Avatar.js";
import TodoList from "./TodoList.js";
import Profile from "./Profile.js";

export default function Atividade03()
{
    return(
        <div>
            <h1>Atividade 03</h1>
            <Profile/>
            <Avatar/>
            <TodoList/>
            <Profile/>
            <Link to="/">Voltar</Link>
        </div>
        );
}