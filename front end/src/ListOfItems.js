import React, { useState,useEffect } from "react";
import MaterialTable from "@material-table/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { postData,getData } from "./ServerServices";
import { useStyles } from "./AddItemsCss";
import { Avatar, TextField, Grid, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Swal from "sweetalert2"
import { useNavigate } from "react-router";
export default function ListOfItem(){
  var classes = useStyles()
   const [products,setProducts] = useState([])
   const [categoryName, setCategoryName] = useState('')
    const [subCategoryName, setSubCategoryName] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [offerPrice, setOfferPrice] = useState('')
    const [productId, setProductId] = useState('')
    const [open, setOpen] = useState(false)
    const[message,setMessage]=useState('')

  const fetchAllItems=async()=>{
    const result=await getData('products/displayallitems')
    setProducts(result.data)
}
useEffect(function(){
  fetchAllItems()

},[])
const handleEdit=(rowData)=>{
  setMessage('')
  setProductName(rowData.productname)
  setCategoryName(rowData.categoryname)
  setSubCategoryName(rowData.subcategoryname)
  setProductId(rowData.productid)
  setPrice(rowData.price)
  setOfferPrice(rowData.offerprice)
  setOpen(true)
}
const handleEditData=async(rowData)=>{
  var body={categoryname:categoryName,subcategoryname:subCategoryName,productname:productName,price:price,offerprice:offerPrice,productid:productId}
 console.log(body)
  var response=await postData('products/updateitem',body)
  if(response.status)
  {
    setMessage('Item has been Edited ')
    fetchAllItems()
   
  }
  else{
    setMessage('Fail to Edit the Item')
  }
  
}
const handleClose=()=>{
  setOpen(false)
  
      }
      const handleDelete=async(rowData)=>{
  
        Swal.fire({
          title: 'Do you want to delete the selected record?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Delete',
          denyButtonText: `Don't Delete`,
        }).then(async(result) => {
          /* Read more about isConfirmed, isDenied below */
          
          if (result.isConfirmed) {
            var body={productid:productId}
            var response=await postData('products/deleteitem',body)
            if(response.status)
            { Swal.fire('Item deleted Successfully', '', 'success')
            fetchAllItems()
            }
            else{
              Swal.fire('Server Error', '', 'error')
            }
           
          } else if (result.isDenied) {
            Swal.fire('Your Record is Safe', '', 'info')
          }
        })
      }  
      
      
const editView=()=>{
  return(
  
            <div style={{
              width: '80%',
              height: 'auto',
              background: '#fff',
              borderRadius: 5}}>
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


                   
                    <Grid item xs={12}>
                        <Button  fullWidth variant="contained" onClick={handleEditData}>Edit</Button>
                    </Grid>
                    <Grid item xs={12} style={{  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  fontSize:24,
  fontWeight:'bold',
  color:'#3ae374'}}>
                   {message}
                 </Grid>
                   

                </Grid>

            </div>
        
  )
}
function displayTable() {
    return(
      <div style={{margin:40}}>
        <MaterialTable
        title="Items"
        data={products}
        columns={[
          { title: 'Category Name', field: 'categoryname' },
          { title: 'Sub Category Name', field: 'subcategoryname' },
          { title: 'Product Name', field: 'productname' },
          {
            title: 'Price',
            field: 'price',
          },
          {
            title: 'Offer Price',
            field: 'offerprice',
          },
        ]}
             
        actions={[
          {
            icon: () => <EditIcon />,
            tooltip: "Edit State",
            onClick: (event, rowData) => {
              handleEdit(rowData)
              },
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete State",
            onClick: (event, rowData) => {
              handleDelete(rowData)
             
              
            },
          },
        ]}
        options={{
          filtering: true,
          sorting: true
        }}
      />
    </div>
    )
      }

      const openDialog=()=>{
        return(
          <div style={{  width: '50%',
          height: 'auto',
          background: '#fff',
          borderRadius: 5}}>
          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          
          <DialogContent>
            {editView()}
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleClose()} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      
        )
      }
      return(
        <div style={ { display:"flex",
        justifyContent:'center',
        alignItems:'center'}}>
        <div style={{padding:5,
    marginTop:30,
    background:'#fff',
    borderRadius:10,
    margin:20}}> 
          {displayTable()}
          </div>
        {openDialog()}
      </div>
      )
}