import React, { useState } from "react";
import { Grid , Typography , InputLabel, MenuItem , FormControl , Select , CircularProgress } from "@material-ui/core";
import useStyle from './styles';
import Pds from '../placedetails/places'
const List=()=>{
    const make=useStyle();
    const [values,setvalue]=useState();
    const places=[
    {name:'india'},
    {name:'salem'},
    {name:'ilampillai'},
    {name:'india'},
    {name:'salem'},
    {name:'ilampillai'},
    {name:'india'},
    {name:'salem'},
    {name:'ilampillai'},
    {name:'india'},
    {name:'salem'},
    {name:'ilampillai'},
    ]





    return(
        <>
<div className={make.container}>
    <Typography variant="h4"> Hospital Around You...</Typography>
    <FormControl className={make.formControl}>
    <InputLabel>type</InputLabel>
    <Select value={values} onChange={(e)=>setvalue(e.target.value)}>
        <MenuItem value="Ayurveda">Ayurveda</MenuItem>
        <MenuItem value="yoga">yoga</MenuItem>
       <MenuItem value="Naturopathy">Naturopathy</MenuItem>
       <MenuItem value="Unani">Unani</MenuItem>
       <MenuItem value="Siddha">Siddha</MenuItem>
       <MenuItem value="Homeopathy">Homeopathy</MenuItem>
</Select>
</FormControl>
<Grid container spacing={3} className={make.list}>
    {places.map((place,i)=>(
        <Grid item key={i} xs={12} >
            <Pds placess={place} />
        </Grid>
    ))}
</Grid>

</div>
        </>
    );
}
export default List;