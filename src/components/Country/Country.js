import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.countryInfo;
    const flagStyle={
        height:'50px'
    };
    const countryStyle={
        border:'1px solid red',
        margin:'10px',
        padding:'10px'
    };
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={()=>handleAddCountry(props.countryInfo)}>Add Country</button>
        </div>
    );
};

export default Country;