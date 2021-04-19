import React from 'react';

import {Heading1} from '../Elements/heading1';
import {Buttons} from '../Elements/button';
import { Textinput } from '../Elements/textinput';

import Grid from '@material-ui/core/Grid';
import { addProduct } from '../Apis/callApis';
import { productList } from '../actions/index';

import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import { getProduct } from '../Apis/callApis';

class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productname:'',
            image:'',
            productprice:'',
            desc:''
        }
        
    }

    componentDidMount() {

    }

    onTextChange = (evt) => {
        
        let value = evt.target.value;
        
        this.setState({[evt.target.name]:value});
        
    }

    onButtonClick = (evt) => {

        if(this.state.productname !== "" && this.state.productprice !== "" && this.state.desc !== "" && this.state.image !== "") {
            let FD = new FormData();
            FD.append('name',this.state.productname);
            FD.append('price',this.state.productprice);
            FD.append('desc',this.state.desc);
            FD.append('file',this.state.image);

            addProduct(FD).then((resp) => {
                if(resp.data.status) {
                    alert('Product Added Successfully');
                    
                    getProduct().then((data)=>{
                        if(data.data[0].status) {
                            
                            this.props.productList(data.data[0].data);
                            this.props.history.push('/product');  
                            // this.setState({prodData:data.data[0].data})
                        }        
                    }).catch((err)=>{
                        console.log(err);
                    }) 
                } else {
                    console.log(resp.data.message);
                    alert(resp.data);
                }
            }).catch((err) => {
                console.log(err);
            });    
        } else {
            alert("Please Input All Data");
        }
        
    }

    onFileChange = (ev) => {
        if(ev.target.files[0]) {
            this.setState({image:ev.target.files[0]})
        }
    }

    render(){
        if(!this.props.login) {
            this.props.history.push('/product');   
        }
        return(
            <>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Heading1 title="Add Product" />
                    <Link to="/product"><h5>Go to Product</h5></Link>
                </Grid>
                <Grid item xs={12}>
                    <Textinput name="productname" label="Product Name" value={this.state.productname} textEvt={this.onTextChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Textinput type="number" name="productprice" label="Product Price" value={this.state.productprice} textEvt={this.onTextChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Textinput name="desc" label="Description" value={this.state.desc} textEvt={this.onTextChange}/>
                </Grid>
                <Grid item xs={12}>
                    <input
                        id="file"
                        type="file"
                        onChange={this.onFileChange}
                        accept="image/*"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Buttons size="large" title="Insert" color="primary" clickEvt={this.onButtonClick} />
                </Grid>
                
            </Grid>
                

            </>
        );
    }
}

const mapStateToProps = state => {
    return { login: state.login };
};

function mapDispatchToProps(dispatch) {
    return {
        productList: stat => dispatch(productList(stat))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);