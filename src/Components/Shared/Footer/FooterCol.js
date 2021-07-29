import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    const {menuTitle, menuItems, key} = props
    return (
        <div className='col-md-3'>
            <h5 style={{ color: '#1cc7c1', paddingBottom: '20px' }}>{menuTitle}</h5>
            <ul className='list-unstyled'>
                {menuItems.map((item)=> <li key={key}><Link to={item.link} className="text-secondary" style={{textDecoration:'none'}}>{item.name}</Link></li>)}
            </ul>            
        </div>
    );
};

export default FooterCol;