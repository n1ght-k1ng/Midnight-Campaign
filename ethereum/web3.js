import Web3 from "web3";
     
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" }); // hijack metamask provider and inject our own provider
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/b889c245352540118f8d78b8baa934e8"
  );
  web3 = new Web3(provider);
}
// now web3 is holding an instance of web3
export default web3;