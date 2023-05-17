import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'; // This is the compiled version of the CampaignFactory.sol file

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xc2D86BAa2aAE7CEa59f8485107180BaD3b1B4455'
);

export default instance;

