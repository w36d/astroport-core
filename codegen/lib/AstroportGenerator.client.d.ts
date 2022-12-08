/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Uint128, Binary, AssetInfo, PairType, ExecuteOnReply, Uint, ArrayOfAssetInfo, Config, ArrayOfTupleOfAssetInfoAndUint128, PendingTokenResponse, PoolInfoResponse, ArrayOfStakerResponse, RewardInfoResponse, ArrayOfAddr } from "./AstroportGenerator.types";
export interface AstroportGeneratorReadOnlyInterface {
    contractAddress: string;
    activePoolLength: () => Promise<Uint>;
    poolLength: () => Promise<Uint>;
    deposit: ({ lpToken, user }: {
        lpToken: string;
        user: string;
    }) => Promise<Uint128>;
    userVirtualAmount: ({ lpToken, user }: {
        lpToken: string;
        user: string;
    }) => Promise<Uint128>;
    totalVirtualSupply: ({ generator }: {
        generator: string;
    }) => Promise<Uint128>;
    pendingToken: ({ lpToken, user }: {
        lpToken: string;
        user: string;
    }) => Promise<PendingTokenResponse>;
    config: () => Promise<Config>;
    rewardInfo: ({ lpToken }: {
        lpToken: string;
    }) => Promise<RewardInfoResponse>;
    orphanProxyRewards: ({ lpToken }: {
        lpToken: string;
    }) => Promise<ArrayOfTupleOfAssetInfoAndUint128>;
    poolInfo: ({ lpToken }: {
        lpToken: string;
    }) => Promise<PoolInfoResponse>;
    simulateFutureReward: ({ futureBlock, lpToken }: {
        futureBlock: number;
        lpToken: string;
    }) => Promise<Uint128>;
    poolStakers: ({ limit, lpToken, startAfter }: {
        limit?: number;
        lpToken: string;
        startAfter?: string;
    }) => Promise<ArrayOfStakerResponse>;
    blockedTokensList: () => Promise<ArrayOfAssetInfo>;
    rewardProxiesList: () => Promise<ArrayOfAddr>;
}
export declare class AstroportGeneratorQueryClient implements AstroportGeneratorReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    activePoolLength: () => Promise<Uint>;
    poolLength: () => Promise<Uint>;
    deposit: ({ lpToken, user }: {
        lpToken: string;
        user: string;
    }) => Promise<Uint128>;
    userVirtualAmount: ({ lpToken, user }: {
        lpToken: string;
        user: string;
    }) => Promise<Uint128>;
    totalVirtualSupply: ({ generator }: {
        generator: string;
    }) => Promise<Uint128>;
    pendingToken: ({ lpToken, user }: {
        lpToken: string;
        user: string;
    }) => Promise<PendingTokenResponse>;
    config: () => Promise<Config>;
    rewardInfo: ({ lpToken }: {
        lpToken: string;
    }) => Promise<RewardInfoResponse>;
    orphanProxyRewards: ({ lpToken }: {
        lpToken: string;
    }) => Promise<ArrayOfTupleOfAssetInfoAndUint128>;
    poolInfo: ({ lpToken }: {
        lpToken: string;
    }) => Promise<PoolInfoResponse>;
    simulateFutureReward: ({ futureBlock, lpToken }: {
        futureBlock: number;
        lpToken: string;
    }) => Promise<Uint128>;
    poolStakers: ({ limit, lpToken, startAfter }: {
        limit?: number | undefined;
        lpToken: string;
        startAfter?: string | undefined;
    }) => Promise<ArrayOfStakerResponse>;
    blockedTokensList: () => Promise<ArrayOfAssetInfo>;
    rewardProxiesList: () => Promise<ArrayOfAddr>;
}
export interface AstroportGeneratorInterface extends AstroportGeneratorReadOnlyInterface {
    contractAddress: string;
    sender: string;
    updateConfig: ({ checkpointGeneratorLimit, generatorController, guardian, vestingContract, votingEscrow, votingEscrowDelegation }: {
        checkpointGeneratorLimit?: number;
        generatorController?: string;
        guardian?: string;
        vestingContract?: string;
        votingEscrow?: string;
        votingEscrowDelegation?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setupPools: ({ pools }: {
        pools: string[][];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updatePool: ({ hasAssetRewards, lpToken }: {
        hasAssetRewards: boolean;
        lpToken: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    claimRewards: ({ lpTokens }: {
        lpTokens: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdraw: ({ amount, lpToken }: {
        amount: Uint128;
        lpToken: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    emergencyWithdraw: ({ lpToken }: {
        lpToken: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    sendOrphanProxyReward: ({ lpToken, recipient }: {
        lpToken: string;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setTokensPerBlock: ({ amount }: {
        amount: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    proposeNewOwner: ({ expiresIn, owner }: {
        expiresIn: number;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    dropOwnershipProposal: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    claimOwnership: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    moveToProxy: ({ lpToken, proxy }: {
        lpToken: string;
        proxy: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    migrateProxy: ({ lpToken, newProxy }: {
        lpToken: string;
        newProxy: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateBlockedTokenslist: ({ add, remove }: {
        add?: AssetInfo[];
        remove?: AssetInfo[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    deactivatePool: ({ lpToken }: {
        lpToken: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    deactivatePools: ({ pairTypes }: {
        pairTypes: PairType[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    checkpointUserBoost: ({ generators, user }: {
        generators: string[];
        user?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    callback: ({ action }: {
        action: ExecuteOnReply;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class AstroportGeneratorClient extends AstroportGeneratorQueryClient implements AstroportGeneratorInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    updateConfig: ({ checkpointGeneratorLimit, generatorController, guardian, vestingContract, votingEscrow, votingEscrowDelegation }: {
        checkpointGeneratorLimit?: number | undefined;
        generatorController?: string | undefined;
        guardian?: string | undefined;
        vestingContract?: string | undefined;
        votingEscrow?: string | undefined;
        votingEscrowDelegation?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setupPools: ({ pools }: {
        pools: string[][];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updatePool: ({ hasAssetRewards, lpToken }: {
        hasAssetRewards: boolean;
        lpToken: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    claimRewards: ({ lpTokens }: {
        lpTokens: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdraw: ({ amount, lpToken }: {
        amount: Uint128;
        lpToken: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    emergencyWithdraw: ({ lpToken }: {
        lpToken: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    sendOrphanProxyReward: ({ lpToken, recipient }: {
        lpToken: string;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setTokensPerBlock: ({ amount }: {
        amount: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    proposeNewOwner: ({ expiresIn, owner }: {
        expiresIn: number;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    dropOwnershipProposal: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    claimOwnership: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    moveToProxy: ({ lpToken, proxy }: {
        lpToken: string;
        proxy: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    migrateProxy: ({ lpToken, newProxy }: {
        lpToken: string;
        newProxy: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateBlockedTokenslist: ({ add, remove }: {
        add?: AssetInfo[] | undefined;
        remove?: AssetInfo[] | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    deactivatePool: ({ lpToken }: {
        lpToken: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    deactivatePools: ({ pairTypes }: {
        pairTypes: PairType[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    checkpointUserBoost: ({ generators, user }: {
        generators: string[];
        user?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    callback: ({ action }: {
        action: ExecuteOnReply;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
