const { ethers } = require("hardhat");

const MintableERC20PredicateProxyAddTestNet = "0x37c3bfC05d5ebF9EBb3FF80ce0bd0133Bf221BC8";
const MintableERC20PredicateProxyAddMainNet = "0x9923263fA127b3d1484cFD649df8f1831c2A74e4";
const ADMIN_WALLET_ADDRESS = process.env.ADMIN_WALLET_ADDRESS

async function main() {
    console.log("ADMIN WALLET:", ADMIN_WALLET_ADDRESS)
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const TypeVEnergyEthContract = await ethers.getContractFactory("TypeVEnergyEth");
    const token = await TypeVEnergyEthContract.deploy([], ADMIN_WALLET_ADDRESS, MintableERC20PredicateProxyAddMainNet)

    console.log("Token address:", token.address)
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });