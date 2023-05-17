import React from "react"
import factory from '../ethereum/factory'
import {Card ,Button } from 'semantic-ui-react'
import Layout from "../components/Layout";
import { Link} from '../routes'

class CampaignIndex extends React.Component {
    static async getInitialProps(){ // next gets the initial props without rendering the component.
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns }
    }
    renderCampaigns(){
        const items = this.props.campaigns.map(address => {  // iterates with the number of elements in the array
            return{
                header: address,
                description:(
                <Link route={`/campaigns/${address}`}>
                <a>View Campaign</a>
                </Link>
                ),
                fluid : true

            }
        })
        return <Card.Group items={items}/>
    }
    render() {
        return(
        <Layout> 
            <h3>Open Campa1gns</h3>
        <div>
            
  <link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>

  
  <script src="like_button.js"></script>

            <Link route="/campaigns/new">
            <a>
            <Button
            floated="right"
            content ="Create Campaign"
            icon="add circle"
            primary = {true}
            />
            </a>
            </Link>
            {this.renderCampaigns()}
            </div>
            </Layout>
    )}
}

export default CampaignIndex
