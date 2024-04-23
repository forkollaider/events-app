"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = void 0;
const userRepository = require('../repositories/user.repository');
const getUser = async (address) => {
    return userRepository.getByAddress(address);
};
exports.getUser = getUser;
const createUser = async (address) => {
    console.log(address, 'adr');
    await userRepository.createUser({ pubkey: address });
    return userRepository.getByAddress(address);
};
exports.createUser = createUser;
