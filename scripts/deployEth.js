const { ethers } = require("hardhat");

const MintableERC20PredicateProxyAddTestNet = "0x37c3bfC05d5ebF9EBb3FF80ce0bd0133Bf221BC8";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const TypeVEnergyEthContract = await ethers.getContractFactory("TypeVEnergyEth");
    const token = await TypeVEnergyEthContract.deploy([], MintableERC20PredicateProxyAddTestNet)

    console.log("Token address:", token.address)
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });