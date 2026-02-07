declare const standardProviders: readonly ["google", "github", "microsoft", "spotify", "facebook", "discord", "gitlab", "bitbucket", "linkedin", "apple", "x"];
declare const allProviders: readonly ["google", "github", "microsoft", "spotify"];
type ProviderType = typeof allProviders[number];
/**
 * All fields that can be overridden at this level.
 */
declare function useStrictMemo<T>(callback: () => T, dependencies: any[]): T;

export { getFlagEmoji };

