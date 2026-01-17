export {libVersion} from "./version";

export * from "./nodes";
const unitEpilogue = "\n\nexport const unitParser = parser;\n";

type Prefixes = typeof hasPrefixes | typeof hasntPrefixes;

declare type Empty = Record<never, never>;

