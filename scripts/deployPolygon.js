const { ethers } = require("hardhat");

const ChildContractAddressTestnet = "0xb5505a6d998549090530911180f38aC5130101c6";
const ChildContractAddressMainnet = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa";
const ADMIN_WALLET_ADDRESS = process.env.ADMIN_WALLET_ADDRESS

async function main() {
    console.log("ADMIN WALLET:", ADMIN_WALLET_ADDRESS)
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const TypeVEnergyPolygonContract = await ethers.getContractFactory("TypeVEnergyPolygon");
    const token = await TypeVEnergyPolygonContract.deploy([], ADMIN_WALLET_ADDRESS,ChildContractAddressMainnet)

    console.log("Token address:", token.address)
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });