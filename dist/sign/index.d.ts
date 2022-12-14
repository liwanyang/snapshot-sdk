import { Web3Provider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { Space, Proposal, CancelProposal, Vote, Follow, Unfollow, Subscribe, Unsubscribe, Profile, Alias, DeleteSpace } from './types';
export declare const domain: {
    name: string;
    version: string;
};
export default class Client {
    readonly address: string;
    constructor(address?: string);
    sign(web3: Web3Provider | Wallet, address: string, message: any, types: any): Promise<unknown>;
    send(envelop: any): Promise<unknown>;
    space(web3: Web3Provider | Wallet, address: string, message: Space): Promise<unknown>;
    proposal(web3: Web3Provider | Wallet, address: string, message: Proposal): Promise<unknown>;
    cancelProposal(web3: Web3Provider | Wallet, address: string, message: CancelProposal): Promise<unknown>;
    vote(web3: Web3Provider | Wallet, address: string, message: Vote): Promise<unknown>;
    follow(web3: Web3Provider | Wallet, address: string, message: Follow): Promise<unknown>;
    unfollow(web3: Web3Provider | Wallet, address: string, message: Unfollow): Promise<unknown>;
    subscribe(web3: Web3Provider | Wallet, address: string, message: Subscribe): Promise<unknown>;
    unsubscribe(web3: Web3Provider | Wallet, address: string, message: Unsubscribe): Promise<unknown>;
    profile(web3: Web3Provider | Wallet, address: string, message: Profile): Promise<unknown>;
    alias(web3: Web3Provider | Wallet, address: string, message: Alias): Promise<unknown>;
    deleteSpace(web3: Web3Provider | Wallet, address: string, message: DeleteSpace): Promise<unknown>;
}
