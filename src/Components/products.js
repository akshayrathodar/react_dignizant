import React from 'react';

import { connect } from "react-redux";
import { getProduct } from '../Apis/callApis';
import { Cardlist } from '../Elements/Cardlist';


import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { productList } from '../actions/index';


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prodData:[]
        }
        console.log(props);
    }

    componentDidMount() {
        this.setState({prodData:this.props.products});

        if(!this.props.login) {
            this.props.history.push('/');   
        }
        getProduct().then((data)=>{
            if(data.data[0].status) {
                this.props.productList(data.data[0].data);
                // this.setState({prodData:data.data[0].data})
            }
            
        }).catch((err)=>{
            console.log(err);
        })
    }
    

    render() {
        return (
            <>
                <h1>Product Page</h1>
                <Link to="/addprod"><h4>Go To Add Products</h4></Link>
                <Grid container >
                    <Grid item xs={12}>
                        <Grid container justify="center">
                {this.state.prodData.map((datas,index)=>{
                    return <Cardlist key={datas.id} name={datas.product_name} price={datas.product_price} image={datas.image} descr={datas.descr} />
                })}
                    </Grid>
                    </Grid>
                    </Grid>
                
            </>
        );
    }

}

const mapStateToProps = state => {
    return { login: state.login , products: state.products };
};

function mapDispatchToProps(dispatch) {
    return {
        productList: stat => dispatch(productList(stat))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);