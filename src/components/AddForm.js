import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurfs } from './../actions'


const smurfInitialInfo = {
    name: '',
    position: '',
    nickname: '',
    description: '',
}

const AddForm = ({addSmurfs}) => {
    const [smurfInfo, setSmurfInfo] = useState(smurfInitialInfo);

    const handleChange = (e) => {
        setSmurfInfo({
            ...smurfInfo, [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()
        addSmurfs(smurfInfo)
        setSmurfInfo(smurfInitialInfo)
    }

        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={handleChange} name="name" value={smurfInfo.name} id="name" />
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={handleChange} name="position" 
                    value={smurfInfo.position} id="position" />
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={handleChange} name="nickname" 
                    value={smurfInfo.nickname} id="nickname" />
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={handleChange} name="description" 
                    value={smurfInfo.description} id="description" />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error} </div>
                <button type='submit'>Submit Smurf</button>
            </form>
        </section>);
    }

    const mapStateToProps = state => {
        return {
            Error: state.errorText
        }
    }

export default connect(mapStateToProps, {addSmurfs})(AddForm);


//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.