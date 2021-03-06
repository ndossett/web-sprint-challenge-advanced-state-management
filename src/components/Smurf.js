import React from 'react';

const Smurf = (props) => {
   const { name, position, nickname, description } = props.smurf 

    return(
        <div data-testid="smurf" className="card">
            <h3>{name}</h3>
            <p>{position}</p>
            <p>{nickname}</p>
            <p>{description}</p>
        </div>);
    
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.