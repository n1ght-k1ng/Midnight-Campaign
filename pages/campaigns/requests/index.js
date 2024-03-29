import React, { Component } from "react"
import Layout from "../../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes"
import Campaign from "../../../ethereum/campaign"
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component{
    static async getInitialProps(props){
        const {address} = props.query
        const campaign = Campaign(address)
        const requestCount = await campaign.methods.getRequestCount().call()
        const approversCount = await campaign.methods.approversCount().call()
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element,index) => {
                return campaign.methods.requests(index).call()  
            }))  // 

            console.log(requests)
        return {address , requests , requestCount , approversCount}
    }
    renderRow(){

       return this.props.requests.map((requests,index) => {
            return <RequestRow 
            key={index}
            id={index}
            request={requests}
            address={this.props.address}
            approversCount={this.props.approversCount}
            />
        })

    }
    render(){
        const { Header, Row, HeaderCell, Body } = Table

        return(
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                <a>
                    <Button primary floated="right" style={{marginBottom: 10}}>Add Request</Button>
                </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalise</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRow()}
                    </Body>
                </Table>
                <div>Found {this.props.requestCount} requests</div>
            </Layout>
        )
    }
}
export default RequestIndex;