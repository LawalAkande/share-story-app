import React from 'react';
import { useState } from 'react';

const ArrowIcon = () => {
    const [icon, setIcon] = useState(false)

    const theIcon = () => {
        icon ? setIcon(false) : setIcon(true)
    }
    return (
        <div>
            <span onClick={theIcon}>
                {icon ? <i className="fa fa-arrow-down"></i> : <i className="fa fa-arrow-up"></i>}
            </span>
        </div>
    )
}

export default ArrowIcon
