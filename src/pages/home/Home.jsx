import React from "react";
import "./home.css";
import Button from '../../components/button/Button';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <p>Navegar hacia los posts</p>
            <Link to="/posts">
                <Button></Button>
            </Link>
        </div>
    )
}

export default Home
