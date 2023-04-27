import React from "react"
import factory from '../ethereum/factory'

class CampaignIndex extends React.Component {
    static async getInitialProps(){ // next gets the initial props without rendering the component.
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log("hey")
        console.log(campaigns)
        return { campaigns }
    }
    render() {
        return <div>{this.props.campaigns[0]}</div>
    }
}

export default CampaignIndex
