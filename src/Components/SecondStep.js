import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function SecondStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const handleChanges=Event=>{

    }

    return (
        <div>
            <div>
                <TextField label="Email" value={userData['email']} onChange={(e) => setUserData({ ...userData, "email": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Country" value={userData['country']} onChange={(e) => setUserData({ ...userData, "country": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="District" value={userData['district']} onChange={(e) => setUserData({ ...userData, "district": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <label>Gender:</label>
                <br></br>
                
             male   <input type={'radio'} name='gender' value={userData['male']} onChange={(e) => setUserData({...userData, "gender": e.target.value })} handleChanges/>
              female   <input type={'radio'} name='gender' value={userData['female']} onChange={(e) => setUserData({...userData, "gender": e.target.value })} handleChanges/>
            </div>
           <br></br>

            <div>
                <Button variant="contained" onClick={() => setStep(1)}  color="secondary">Back</Button>
                
                <Button variant="contained" onClick={() => setStep(3)} color="primary">  Next</Button>
            </div>
        </div>
    )
}
