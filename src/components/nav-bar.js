import React from 'react';
import './nav-bar.css';

export default function Navbar() {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="{null}">What ?</a>
                </li>
                <li>
                    <a className="newgame" href="{null}">New Game</a>
                </li>
            </ul>
        </nav>
    )
}