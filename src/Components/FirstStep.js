import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

function FirstStep(props) {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
   const [isChecked, setChecked] = useState(false);

    return (
        <form>
            <div>
                <div>
                    <TextField label="First Name" value={userData['firstname']} onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })} margin="normal" variant="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Last Name" value={userData['lastname']} onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })} margin="normal" variant="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Contact Number" value={userData['contact']} onChange={(e) => setUserData({ ...userData, "contact": e.target.value })} margin="normal" variant="outlined" color="secondary" />
                </div>
                <div>
                    <br/>
                    <label>
                        <input type="checkbox" checked={isChecked} onChange={() => setChecked((prev) => !prev)} />
                        <span>Are you 18+ ?</span>
                    </label>
                    <p>{isChecked ? "You are 18+ !!" : "You are not 18+ !!"}</p><br/>
                </div>
                <div>
                    <h4>Upload aadhar image   :        
                        <input type={'file'}  onChange ={(e)=>this.upload(e)} name='img' /></h4>
                </div>
                <br/>
                <div>
                    <Button variant="contained" onClick={() => setStep(2)} color="primary">Next</Button>
                </div>
            </div>
        </form>
    );
}

export default FirstStep;
