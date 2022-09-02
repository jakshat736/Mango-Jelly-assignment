import { useState, useEffect } from "react";
import { useStyles } from "./AddItemsCss";
import { Avatar, TextField, Grid, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { postData,getData } from "./ServerServices";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Swal from "sweetalert2"
import { useNavigate } from "react-router";

export default function Products(props) {
    var classes = useStyles()
    var navigate=useNavigate()
    const [categoryName, setCategoryName] = useState('')
    const [subCategoryName, setSubCategoryName] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [offerPrice, setOfferPrice] = useState('')


 
    const handleSubmit = async () => {
       var body={categoryname:categoryName,subcategoryname:subCategoryName,productname:productName,price:price,offerprice:offerPrice}

        var result = await postData('products/add_items',body)
        if (result.result) {
            Swal.fire({
                icon: 'success',
                title: 'Record Submitted Successfully',

            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
        
    }
    const handleReset = () => {
        setCategoryName('')
        setSubCategoryName('')
        setProductName('')
        setPrice('')
        setOfferPrice('')
    }


    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid className={classes.gridStyle} container spacing={2}>
                <Grid item  xs={12} style={{display:'flex'}}>
                        <div className={classes.headingText}>
                        Product Interface
                        </div>
                       
                    </Grid>
                    <Grid item xs={4}>
                    <TextField value={categoryName} onChange={(event) => setCategoryName(event.target.value)} fullWidth variant="outlined" label="Category Name" />
                    </Grid>
                    <Grid item xs={4}>
                    <TextField value={subCategoryName} onChange={(event) => setSubCategoryName(event.target.value)} fullWidth variant="outlined" label="SubCategory Name" />
                     </Grid>
                    <Grid item xs={4}>
                        <TextField value={productName} onChange={(event) => setProductName(event.target.value)} fullWidth variant="outlined" label="Product Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField value={price} onChange={(event) => setPrice(event.target.value)} fullWidth variant="outlined" label="Price" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField value={offerPrice} onChange={(event) => setOfferPrice(event.target.value)} fullWidth variant="outlined" label="Offer Price" />
                    </Grid>


                   
                    <Grid item xs={6}>
                        <Button onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth onClick={handleReset} variant="contained">Reset</Button>
                    </Grid>

                </Grid>

            </div>
        </div>
    )
}