import { useState, useEffect } from 'react'

import './DropdownInput.css'


type DropdownInputProps = {
    name: string,
    full_options: { name: string; amount: number; }[]
}


function DropdownInput({ name, full_options }: DropdownInputProps) {

    /* FUNCTIONS */

    // filter the list of options by the string in the input element
    function filterOptions (value: string) {
        const new_options = full_options.filter(opt => opt.name.toLowerCase().includes(value.toLowerCase()));
        setOptions(new_options);
    }

    // create tag element to add to selected list
    function createTagEl(obj: {name: string, amount: number}): HTMLLIElement {
        const newtag = document.createElement('li');
        const d1 = document.createElement('div');
        const d2 = document.createElement('div');
        d1.classList.add('name');
        d2.classList.add('amount');
        d1.innerText = obj.name;
        d2.innerText = obj.amount.toString();
        newtag.appendChild(d1);
        newtag.appendChild(d2);
        newtag.addEventListener('click', (e) => {
            (e.currentTarget as HTMLElement).remove();
        });
        return newtag;
    }

    // handle clicking an option in the dropdown list
    function handleDropdownClick(obj: {name: string, amount: number}) {
        // console.table(obj);
        const component_el = document.getElementById(component_id)!;
        const selected_el = component_el.querySelector('.selected-tags');
        const dropdown_list_el = component_el.querySelector('ul');
        const newtag = createTagEl(obj);
        selected_el?.appendChild(newtag);
        dropdown_list_el?.classList.remove('show');
    }
    
    /* MAIN */

    const component_id = name + '-dropdown-input';
    full_options.sort((a, b) => b.amount - a.amount);
    
    const [options, setOptions] = useState(full_options);
    

    // show/hide dropdown
    useEffect(() => {
        
        const component_el = document.getElementById(component_id)!;
        
        const input_el = component_el.querySelector('input');
        const dropdown_list_el = component_el.querySelector('ul');

        input_el?.addEventListener('focus', () => {
            dropdown_list_el?.classList.add('show');
        });

        input_el?.addEventListener('blur', () => {
            setTimeout(() => dropdown_list_el?.classList.remove('show'), 10);
        });
        
        
        return () => {
            //
            console.log('cleanup ...');
        };
    }, []);
    

    /* RETURN */
    const dropdownList = options.map((opt) => 
        <li key={opt.name+opt.amount} onMouseDown={() => handleDropdownClick(opt)}>
            <div>{opt.name}</div><div>{opt.amount}</div>
        </li>
    )
    return (
        <div className="DropdownInput" id={component_id}>
            <div className="name">{name}</div>
            <div className="selected-tags"></div>
            <input id={name + "_input"} type="search" onChange={e => filterOptions(e.target.value)} />
            <ul className="dropdown-list">
                {dropdownList}
            </ul>
        </div>
    )
}

export default DropdownInput;