/**
 * Source: "typescript/lib/lib.dom.d.ts"
 */

type KeyType = "private" | "public" | "secret";
type KeyUsage = "decrypt" | "deriveBits" | "deriveKey" | "encrypt" | "sign" | "unwrapKey" | "verify" | "wrapKey";

export interface KeyAlgorithm {
    name: string;
}

/** The CryptoKey dictionary of the Web Crypto API represents a cryptographic key. */
export interface CryptoKey {
    readonly algorithm: KeyAlgorithm;
    readonly extractable: boolean;
    readonly type: KeyType;
    readonly usages: KeyUsage[];
}

/** The CryptoKeyPair dictionary of the Web Crypto API represents a key pair for an asymmetric cryptography algorithm, also known as a public-key algorithm. */
export interface CryptoKeyPair {
    privateKey: CryptoKey;
    publicKey: CryptoKey;
}
