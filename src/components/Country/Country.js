import React from 'react';

const Country = (props) => {
    const {name} = props.countryInfo;
    return (
        <div>
            <h4>This is {name}</h4>
        </div>
    );
};

export default Country;