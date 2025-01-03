import { useState, useEffect } from 'react'

import './DropdownInput.css'


type DropdownInputProps = {
    name: string,
    options: { name: string; amount: number; }[] | null
}


function DropdownInput({ name, options }: DropdownInputProps) {

    /* FUNCTIONS */

    // filter the list of options by the string in the input element
    function filterOptions(value: string) {
        if (options) {
            const new_options = options.filter(opt => opt.name.toLowerCase().includes(value.toLowerCase()));
            setFilteredOptions(new_options);
        }
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
    function handleSelect(obj: {name: string, amount: number}) {
        const component_el = document.getElementById(component_id)!;
        const selected_el = component_el.querySelector('.selected-tags');
        const dropdown_list_el = component_el.querySelector('ul');
        const newtag = createTagEl(obj);
        selected_el?.appendChild(newtag);
        dropdown_list_el?.classList.remove('show');
    }
    
    function getDropdownList() {
        if (!options) {
            return (<div>No options</div>)
        }
        
        return filteredOptions?.map((opt) => 
            <li key={opt.name+opt.amount} onMouseDown={() => handleSelect(opt)}> {/* Could be optimized */}
            <div>{opt.name}</div><div>{opt.amount}</div>
        </li>
        )
    }


    /* MAIN */

    // console.log(options);
    
    const component_id = name + '-dropdown-input';
    options?.sort((a, b) => b.amount - a.amount);
    
    const [filteredOptions, setFilteredOptions] = useState(options);

    // show/hide dropdown
    useEffect(() => {
        const component_el = document.getElementById(component_id)!;
        
        const input_el = component_el.querySelector('input');
        const dropdown_list_el = component_el.querySelector('ul');

        input_el?.addEventListener('focus', () =>   dropdown_list_el?.classList.add('show') );
        input_el?.addEventListener('blur', () =>    dropdown_list_el?.classList.remove('show') );
    }, []);
    
    // update filtered options on when options change
    useEffect(() => {
        filterOptions('');
    }, [options]);

    /* RETURN */

    return (
        <div className="DropdownInput" id={component_id}>
            <div className="name">{name}</div>
            <ul className="selected-tags"></ul>
            <input id={name + "_input"} type="search" autoComplete="off" onChange={e => filterOptions(e.target.value)} />
            <ul className="dropdown-list">
                {getDropdownList()}
            </ul>
        </div>
    )
}

export default DropdownInput;