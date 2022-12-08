/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Uint128, Binary } from "./AstroportVesting.types";
export interface AstroportVestingMessage {
    contractAddress: string;
    sender: string;
    claim: ({ amount, recipient }: {
        amount?: Uint128;
        recipient?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    proposeNewOwner: ({ expiresIn, owner }: {
        expiresIn: number;
        owner: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    dropOwnershipProposal: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    claimOwnership: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class AstroportVestingMessageComposer implements AstroportVestingMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    claim: ({ amount, recipient }: {
        amount?: string | undefined;
        recipient?: string | undefined;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    proposeNewOwner: ({ expiresIn, owner }: {
        expiresIn: number;
        owner: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    dropOwnershipProposal: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    claimOwnership: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
