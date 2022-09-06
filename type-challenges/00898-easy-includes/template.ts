import { Equal } from '@type-challenges/utils';

export type Includes<T extends readonly any[], U> = T extends [ infer First, ...infer R ] ?
    Equal<First, U> extends true ? true : Includes<R, U> : false