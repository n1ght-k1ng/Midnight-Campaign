# Midn1ght Campa1gn

## Overview
This documentation provides an overview of the **Midn1ght Campa1gn**, explaining its purpose, features, and implementation details. The project utilizes the Solidity programming language to develop a blockchain-based application and is built on a Next.js app. Semantic UI is used as the front-end framework to enhance the user interface and design.

## Table of Contents
1. [Introduction](#introduction)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contracts](#contracts)
   - [CampaignFactory](#campaignfactory-contract)
   - [Campaign](#campaign-contract)
6. [Next.js App](#next-js-app)

## Introduction
The Blockchain Solidity project is designed to create and manage crowdfunding campaigns using blockchain technology. It consists of two Solidity contracts: CampaignFactory and Campaign. The project also includes a Next.js app for the front-end interface, utilizing Semantic UI as the front-end framework to provide a visually appealing and responsive design.

## Requirements
- Solidity compiler version: ^0.4.17
- Ethereum development environment (e.g., Remix, Truffle, Ganache)
- Node.js and npm (Node Package Manager)
- Next.js
- Semantic UI

## Installation
1. Install an Ethereum development environment of your choice (e.g., Remix, Truffle, Ganache).
2. Copy the code for the CampaignFactory and Campaign contracts into separate Solidity files.
3. Compile the contracts using the Solidity compiler.
4. Set up Node.js and npm on your machine if not already installed.
5. Install Next.js globally by running the following command: `npm install -g next`
6. Clone the project repository and navigate to the project directory.

## Usage
1. Start the Ethereum development environment (e.g., Ganache) to deploy and interact with the smart contracts.
2. Deploy the CampaignFactory contract on the Ethereum network.
3. Call the `createCampaign` function of the CampaignFactory contract, providing the minimum contribution amount required for the campaign.
4. Access the deployedCampaigns array in the CampaignFactory contract to retrieve the addresses of the deployed Campaign instances.
5. Deploy the Campaign contract by calling the `createCampaign` function of the CampaignFactory contract, providing the minimum contribution amount and the address of the campaign manager.
6. Interact with the Campaign contract by calling its various functions to contribute to the campaign, create requests, approve requests, and finalize requests.
7. Set up and run the Next.js app to provide a front-end interface for the project.

## Contracts
The Blockchain Solidity project consists of two main contracts: **CampaignFactory** and **Campaign**. These contracts are written in Solidity and deployed on the Ethereum blockchain.

### CampaignFactory Contract
The CampaignFactory contract is responsible for creating new instances of the Campaign contract. It keeps track of all the deployed campaigns and provides a convenient interface for managing them.
Functions


- **createCampaign(uint minimum)**: Creates a new campaign with the specified minimum contribution amount. The minimum parameter defines the minimum contribution required to participate in the campaign.

- **getDeployedCampaigns()**: Retrieves an array of addresses representing the deployed Campaign instances.

### Campaign Contract

The **Campaign** contract represents an individual crowdfunding campaign. It manages contributions, spending requests, and approvals from campaign contributors.

#### Structs

* **Request**: Represents a spending request made by the campaign manager. It includes the description of the request, the amount to be spent, the recipient's address, the completion status, the number of approvals received, and a mapping of addresses to approval status.

#### Variables

* **requests**: An array of Request structs, storing all the spending requests made by the campaign manager.
* **manager**: The address of the campaign manager who created the campaign.
* **minimumContribution**: The minimum contribution required to participate in the campaign.
* **approvers**: A mapping of addresses to a boolean value indicating whether an address has contributed to the campaign.
* **approversCount**: The total number of contributors to the campaign.

#### Modifiers
* **restricted()**: A modifier that restricts access to certain functions only to the campaign manager.
#### Functions

* **contribute()**: Allows a user to contribute to the campaign by sending Ether. The contributed amount must be greater than the minimum contribution.
* **createRequest(string description, uint value, address recipient)**: Creates a spending request with the specified description, amount, and recipient address. Only the campaign manager can create requests.
* **approveRequest(uint index)**: Allows campaign contributors to approve a spending request at the specified index. The request must not have been previously approved by the same contributor.
* **finalizeRequest(uint index)**: Finalizes a spending request at the specified index if it has received approvals from more than half of the campaign approvers and is not yet completed.
* **getSummary()**: Returns a tuple containing the campaign's minimum contribution, current balance, number of requests, number of approvers, and manager's address.
* **getRequestCount()**: Returns the number of spending requests in the campaign.


The Campaign contract provides the functionality required to manage a crowdfunding campaign on the Ethereum blockchain.



## Next.js App
The Next.js app provides a user interface for interacting with the Blockchain Solidity project.

### Installation
1. Navigate to the `app` directory in the project.
2. Install the dependencies by running the following command:`npm install --legacy-peer-deps`


### Configuration
1. Open the `app` directory in your preferred code editor.
2. Modify the configuration file `config.js` to specify the Ethereum network provider URL and the deployed contract addresses.

### Usage
1. Start the Next.js app by running the following command:`npm run dev`

2. Access the app in your browser at `http://localhost:3000`.

The Next.js app will allow users to interact with the deployed campaigns, view campaign details, contribute to campaigns, create spending requests, and approve/finalize requests.

## Conclusion
**Midn1ght Campa1gn** provides a comprehensive solution for creating and managing crowdfunding campaigns on the Ethereum blockchain. 
