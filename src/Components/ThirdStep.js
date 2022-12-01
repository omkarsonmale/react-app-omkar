import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import { upload } from '@testing-library/user-event/dist/upload';


export default function ThirdStep() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
    //  function upload(){
    //     console.warn(e.target.files)
    //  }
    return (
        <div>
            <div>
                <TextField label="City" value={userData['city']} onChange={(e) => setUserData({ ...userData, "city": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Landmark" value={userData['landmark']} onChange={(e) => setUserData({ ...userData, "landmark": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Postal Code" value={userData['postcode']} onChange={(e) => setUserData({ ...userData, "postcode": e.target.value })} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <input type={'file'}  onChange ={(e)=>this.upload(e)} name='img' />
            </div>
            <br></br>
            <div>
                <Button variant="contained" onClick={() => setStep(2)} color="secondary">Back</Button><span></span>
                <Button variant="contained" onClick={submitData} color="primary">Submit</Button>
            </div>
        </div>
    )
}
