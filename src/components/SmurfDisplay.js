import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

const SmurfDisplay = ({fetchSmurfs, isLoading, smurfsArr}) => {
    useEffect(() => { 
        fetchSmurfs()
    }, []);
    
        return(
        <div> {
                isLoading === true ? (<h1>Loading Smurfs...</h1>): 
                (smurfsArr.map(smurf => {
                    return < Smurf smurf={smurf} />}
                ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfsArr: state.smurfsArr,
        isLoading: state.isLoading,
    }
} 

export default connect(mapStateToProps, {fetchSmurfs})(SmurfDisplay)


//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.