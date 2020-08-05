import React, {useEffect, useState} from 'react';
import {getEmployees} from "../../api/getEmployees";

 const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addEmployee = (e) => {
        e.preventDefault();
        setEmployees([...employees, inputValue]);
        setInputValue('');
    }

    const deleteEmployee = (item) => {
        setEmployees(employees.filter((index) => index !== item))
    }

    useEffect(()  => {
        getEmployees()
            .then(data => setEmployees(data));
    }, [])

    return (
        <>
            <form>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <input
                    type='submit'
                    value='Добавить сотрудника'
                    onClick={addEmployee}
                />
            </form>
            <ol>
                {employees.map((item, index) =>
                    <li key={index}>
                        <span>
                            {item}
                        </span>
                        <button
                            type='button'
                            onClick={() => deleteEmployee(item)}
                        >Удалить</button>
                    </li>)}
            </ol>
        </>
    )
}

export default Employees;
