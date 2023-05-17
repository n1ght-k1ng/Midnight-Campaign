import React ,{ Component} from 'react';
import Layout from '../../components/Layout';
import { Form , Button  , Input , Message} from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes'
class CampaignNew extends Component{
    state={
        minimumContribution:'',
        errormessage:'',
        loading: false
    }
    onSubmit = async event =>{

        event.preventDefault();
        this.setState({loading: true , errormessage:''})
        try{
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.minimumContribution).send({
            from: accounts[0]

        
        })
        Router.push('/')
    }catch(err){
        this.setState({errormessage: err.message});

    }
    this.setState({loading: false})

    }
    render(){
        return(
            <Layout>
                <h3>Create a Campa1gn</h3>
            <Form onSubmit ={this.onSubmit} error ={!!this.state.errormessage}> 
            {/* // adding the error prop to the form will make sure that the error message is displayed */}
                <Form.Field>
                    <label>
                        Minimum Contribution
                    </label>
                    <Input 
                    label = "Wei" 
                    labelPosition='right'
                    placeholder= "Enter Amount"
                    value = {this.state.minimumContribution}
                    onChange={event => this.setState({minimumContribution: event.target.value})}
                     />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errormessage}/>
                <Button loading={this.state.loading} primary> Create!</Button>   
            </Form>

            </Layout>
        );
    }
}

export default CampaignNew;