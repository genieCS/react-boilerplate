import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <aside className="menu">
                <Link to="/">Home</Link>
                <Link to="/a">a</Link>
                <Link to="/b">b</Link>
            </aside>
        );
    }
}
