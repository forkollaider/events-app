const userRepository = require('../repositories/user.repository');

export const getUser = async (address: string) => {
    return userRepository.getByAddress(address);
}

export const createUser = async (address: string) => {
    await userRepository.createUser({pubkey: address});
    return userRepository.getByAddress(address);
}