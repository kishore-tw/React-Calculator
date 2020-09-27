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
        <Grid><br/></Grid>
        </Grid>

        <Grid  item><Input required value={inputOne} onInput = {data => onValueChange("inputOne", data.target.value)}
        className="input" id = "input_one" type="number" placeholder="Input One"/>
        </Grid>
      
        <Grid><br/></Grid>
        <Grid item><Input value={inputTwo} onChange = {data => onValueChange("inputTwo", data.target.value)}
        className="input" type = "number" id = "input_two" placeholder="Input Two" required/></Grid>
        <Grid><br/></Grid>

        <Grid item>
        <span className="button"><Button  id="button1" onClick = {data => onClickChange("+")} variant="contained" color="default"> + </Button></span>
        <span className="button"><Button  onClick = {data => onClickChange("-")} variant="contained" color="default"> - </Button></span>
        <span className="button"><Button  onClick = {data => onClickChange("*")} variant="contained" color="default"> * </Button></span>
        <span className="button"><Button  onClick = {data => onClickChange("/")} variant="contained" color="default"> / </Button></span>
        </Grid>

        <Grid><br/><br/></Grid>
        <Grid item>
            <Button variant="contained" onClick = {data => onClickChange("clear")}> Clear </Button></Grid>

        <Grid><br/></Grid>
        <TextField label="Output" id="output"value={output}  type="number" />
    </Grid>
    </Grid>
    </form>
   )
}

export default Calculator