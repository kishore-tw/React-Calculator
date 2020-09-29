import React from 'react'
import './Calculator.css'
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Input } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function Calculator({inputOne, inputTwo, output, hasError, onValueChange, onClickChange}){
return (
    <form>
    <Grid container spacing={2} direction="column">
    <Grid className="formBox">
        <Grid>
        { hasError === true &&
        <Alert severity="error">Please fill both the fields</Alert>
        }
        { hasError === 'validation_error' &&
        <Alert severity="error">Please enter valid values</Alert>
        }
        <Grid><br/></Grid>
        </Grid>
        <Grid  item><Input value={inputOne} onChange = {data => onValueChange("inputOne", data.target.value)}
        className="input" id = "input_one"  placeholder="Input One"/>
        </Grid>
      
        <Grid><br/></Grid>
        <Grid item><Input value={inputTwo} onChange = {data => onValueChange("inputTwo", data.target.value)}
        className="input" id = "input_two" placeholder="Input Two"/></Grid>
        <Grid><br/></Grid>

        <Grid item>
        <span className="button"><Button  id="plus" onClick = {data => onClickChange("+")} variant="contained" color="default"> + </Button></span>
        <span className="button"><Button  id="minus" onClick = {data => onClickChange("-")} variant="contained" color="default"> - </Button></span>
        <span className="button"><Button  id="multiply" onClick = {data => onClickChange("*")} variant="contained" color="default"> * </Button></span>
        <span className="button"><Button  id="divide" onClick = {data => onClickChange("/")} variant="contained" color="default"> / </Button></span>
        </Grid>

        <Grid><br/><br/></Grid>
        <Grid item>
            <Button variant="contained" id="clear" onClick = {data => onClickChange("clear")}> Clear </Button></Grid>
        <Grid><br/></Grid>
        <Grid><br/></Grid>
        <TextField className = "textField" size="small" label="Output" variant="outlined" id="output" value={output}  type="number" 
        InputProps={{
            readOnly: true,
          }}/>
    </Grid>
    </Grid>
    </form>
   )
}

export default Calculator