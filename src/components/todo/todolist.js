import React, {Components} from 'react';
import Todo from './todo';

const List = props => (
    <ul>
        {
            props.items.map((items, index) => <li key={index}>{items}
                <span>X</span></li>)
        }
    </ul>
);

export default List;