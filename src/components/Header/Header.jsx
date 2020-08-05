import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import {getEmployees} from "../../api/getEmployees";

const Header = () => {
    useEffect(() => {
        getEmployees();
    }, []);
    return (
        <ul>
            <li>
                <NavLink exact={true} to='/' activeClassName='active'>Главная</NavLink>
            </li>
            <li>
               <NavLink to='/employees' activeClassName='active'>Сотрудники</NavLink>
            </li>
        </ul>
    );
}

export default Header;
