import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'; // This is the compiled version of the CampaignFactory.sol file

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x145547A4C6901E6c5DeE9AdEb06bBCCE595d1BBa'
);

export default instance;