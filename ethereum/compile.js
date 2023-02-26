 const path = require('path');
 const solc = require('solc');
 const fs = require('fs-extra'); // fs-extra is a library that extends the functionality of fs

 const buildPath = path.resolve(__dirname,'build');
 fs.removeSync(buildPath); // remove the build folder

const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');

const output = solc.compile(source,1).contracts; // we only want the contracts property

fs.ensureDirSync(buildPath); // make sure the build folder exists and if it doesn't, create it

for(let contract in output){
    fs.outputJsonSync(
        path.resolve(buildPath,contract.replace(':','') + '.json'),
        output[contract] // 

    )

}
// when the contract gets recompiled, the build folder will be deleted and recreated 
