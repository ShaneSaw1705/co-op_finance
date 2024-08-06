
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model UserDetails
 * 
 */
export type UserDetails = $Result.DefaultSelection<Prisma.$UserDetailsPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model UserToGroup
 * 
 */
export type UserToGroup = $Result.DefaultSelection<Prisma.$UserToGroupPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tests
 * const tests = await prisma.test.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs>;

  /**
   * `prisma.userDetails`: Exposes CRUD operations for the **UserDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDetails
    * const userDetails = await prisma.userDetails.findMany()
    * ```
    */
  get userDetails(): Prisma.UserDetailsDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.userToGroup`: Exposes CRUD operations for the **UserToGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserToGroups
    * const userToGroups = await prisma.userToGroup.findMany()
    * ```
    */
  get userToGroup(): Prisma.UserToGroupDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Test: 'Test',
    UserDetails: 'UserDetails',
    Group: 'Group',
    UserToGroup: 'UserToGroup'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "test" | "userDetails" | "group" | "userToGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      UserDetails: {
        payload: Prisma.$UserDetailsPayload<ExtArgs>
        fields: Prisma.UserDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findFirst: {
            args: Prisma.UserDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findMany: {
            args: Prisma.UserDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          create: {
            args: Prisma.UserDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          createMany: {
            args: Prisma.UserDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          delete: {
            args: Prisma.UserDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          update: {
            args: Prisma.UserDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          deleteMany: {
            args: Prisma.UserDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          aggregate: {
            args: Prisma.UserDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDetails>
          }
          groupBy: {
            args: Prisma.UserDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      UserToGroup: {
        payload: Prisma.$UserToGroupPayload<ExtArgs>
        fields: Prisma.UserToGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserToGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserToGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload>
          }
          findFirst: {
            args: Prisma.UserToGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserToGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload>
          }
          findMany: {
            args: Prisma.UserToGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload>[]
          }
          create: {
            args: Prisma.UserToGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload>
          }
          createMany: {
            args: Prisma.UserToGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserToGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload>[]
          }
          delete: {
            args: Prisma.UserToGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload>
          }
          update: {
            args: Prisma.UserToGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload>
          }
          deleteMany: {
            args: Prisma.UserToGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserToGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserToGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToGroupPayload>
          }
          aggregate: {
            args: Prisma.UserToGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserToGroup>
          }
          groupBy: {
            args: Prisma.UserToGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserToGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserToGroupCountArgs<ExtArgs>
            result: $Utils.Optional<UserToGroupCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserDetailsCountOutputType
   */

  export type UserDetailsCountOutputType = {
    groups: number
    UserToGroup: number
  }

  export type UserDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | UserDetailsCountOutputTypeCountGroupsArgs
    UserToGroup?: boolean | UserDetailsCountOutputTypeCountUserToGroupArgs
  }

  // Custom InputTypes
  /**
   * UserDetailsCountOutputType without action
   */
  export type UserDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsCountOutputType
     */
    select?: UserDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserDetailsCountOutputType without action
   */
  export type UserDetailsCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserDetailsCountOutputType without action
   */
  export type UserDetailsCountOutputTypeCountUserToGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToGroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    users: number
    UserToGroup: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupCountOutputTypeCountUsersArgs
    UserToGroup?: boolean | GroupCountOutputTypeCountUserToGroupArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUserToGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToGroupWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }


  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Test model
   */ 
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'Int'>
    readonly name: FieldRef<"Test", 'String'>
    readonly description: FieldRef<"Test", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
  }


  /**
   * Model UserDetails
   */

  export type AggregateUserDetails = {
    _count: UserDetailsCountAggregateOutputType | null
    _avg: UserDetailsAvgAggregateOutputType | null
    _sum: UserDetailsSumAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  export type UserDetailsAvgAggregateOutputType = {
    id: number | null
  }

  export type UserDetailsSumAggregateOutputType = {
    id: number | null
  }

  export type UserDetailsMinAggregateOutputType = {
    id: number | null
    username: string | null
    description: string | null
  }

  export type UserDetailsMaxAggregateOutputType = {
    id: number | null
    username: string | null
    description: string | null
  }

  export type UserDetailsCountAggregateOutputType = {
    id: number
    username: number
    description: number
    _all: number
  }


  export type UserDetailsAvgAggregateInputType = {
    id?: true
  }

  export type UserDetailsSumAggregateInputType = {
    id?: true
  }

  export type UserDetailsMinAggregateInputType = {
    id?: true
    username?: true
    description?: true
  }

  export type UserDetailsMaxAggregateInputType = {
    id?: true
    username?: true
    description?: true
  }

  export type UserDetailsCountAggregateInputType = {
    id?: true
    username?: true
    description?: true
    _all?: true
  }

  export type UserDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to aggregate.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDetails
    **/
    _count?: true | UserDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDetailsMaxAggregateInputType
  }

  export type GetUserDetailsAggregateType<T extends UserDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDetails[P]>
      : GetScalarType<T[P], AggregateUserDetails[P]>
  }




  export type UserDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsWhereInput
    orderBy?: UserDetailsOrderByWithAggregationInput | UserDetailsOrderByWithAggregationInput[]
    by: UserDetailsScalarFieldEnum[] | UserDetailsScalarFieldEnum
    having?: UserDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDetailsCountAggregateInputType | true
    _avg?: UserDetailsAvgAggregateInputType
    _sum?: UserDetailsSumAggregateInputType
    _min?: UserDetailsMinAggregateInputType
    _max?: UserDetailsMaxAggregateInputType
  }

  export type UserDetailsGroupByOutputType = {
    id: number
    username: string
    description: string
    _count: UserDetailsCountAggregateOutputType | null
    _avg: UserDetailsAvgAggregateOutputType | null
    _sum: UserDetailsSumAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  type GetUserDetailsGroupByPayload<T extends UserDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
        }
      >
    >


  export type UserDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    description?: boolean
    groups?: boolean | UserDetails$groupsArgs<ExtArgs>
    UserToGroup?: boolean | UserDetails$UserToGroupArgs<ExtArgs>
    _count?: boolean | UserDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    description?: boolean
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectScalar = {
    id?: boolean
    username?: boolean
    description?: boolean
  }

  export type UserDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | UserDetails$groupsArgs<ExtArgs>
    UserToGroup?: boolean | UserDetails$UserToGroupArgs<ExtArgs>
    _count?: boolean | UserDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDetails"
    objects: {
      groups: Prisma.$GroupPayload<ExtArgs>[]
      UserToGroup: Prisma.$UserToGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      description: string
    }, ExtArgs["result"]["userDetails"]>
    composites: {}
  }

  type UserDetailsGetPayload<S extends boolean | null | undefined | UserDetailsDefaultArgs> = $Result.GetResult<Prisma.$UserDetailsPayload, S>

  type UserDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserDetailsCountAggregateInputType | true
    }

  export interface UserDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDetails'], meta: { name: 'UserDetails' } }
    /**
     * Find zero or one UserDetails that matches the filter.
     * @param {UserDetailsFindUniqueArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDetailsFindUniqueArgs>(args: SelectSubset<T, UserDetailsFindUniqueArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserDetails that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserDetailsFindUniqueOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDetailsFindFirstArgs>(args?: SelectSubset<T, UserDetailsFindFirstArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDetails
     * const userDetails = await prisma.userDetails.findMany()
     * 
     * // Get first 10 UserDetails
     * const userDetails = await prisma.userDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDetailsWithIdOnly = await prisma.userDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDetailsFindManyArgs>(args?: SelectSubset<T, UserDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserDetails.
     * @param {UserDetailsCreateArgs} args - Arguments to create a UserDetails.
     * @example
     * // Create one UserDetails
     * const UserDetails = await prisma.userDetails.create({
     *   data: {
     *     // ... data to create a UserDetails
     *   }
     * })
     * 
     */
    create<T extends UserDetailsCreateArgs>(args: SelectSubset<T, UserDetailsCreateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserDetails.
     * @param {UserDetailsCreateManyArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDetailsCreateManyArgs>(args?: SelectSubset<T, UserDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDetails and returns the data saved in the database.
     * @param {UserDetailsCreateManyAndReturnArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDetails and only return the `id`
     * const userDetailsWithIdOnly = await prisma.userDetails.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserDetails.
     * @param {UserDetailsDeleteArgs} args - Arguments to delete one UserDetails.
     * @example
     * // Delete one UserDetails
     * const UserDetails = await prisma.userDetails.delete({
     *   where: {
     *     // ... filter to delete one UserDetails
     *   }
     * })
     * 
     */
    delete<T extends UserDetailsDeleteArgs>(args: SelectSubset<T, UserDetailsDeleteArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserDetails.
     * @param {UserDetailsUpdateArgs} args - Arguments to update one UserDetails.
     * @example
     * // Update one UserDetails
     * const userDetails = await prisma.userDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDetailsUpdateArgs>(args: SelectSubset<T, UserDetailsUpdateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserDetails.
     * @param {UserDetailsDeleteManyArgs} args - Arguments to filter UserDetails to delete.
     * @example
     * // Delete a few UserDetails
     * const { count } = await prisma.userDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDetailsDeleteManyArgs>(args?: SelectSubset<T, UserDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDetailsUpdateManyArgs>(args: SelectSubset<T, UserDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserDetails.
     * @param {UserDetailsUpsertArgs} args - Arguments to update or create a UserDetails.
     * @example
     * // Update or create a UserDetails
     * const userDetails = await prisma.userDetails.upsert({
     *   create: {
     *     // ... data to create a UserDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDetails we want to update
     *   }
     * })
     */
    upsert<T extends UserDetailsUpsertArgs>(args: SelectSubset<T, UserDetailsUpsertArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsCountArgs} args - Arguments to filter UserDetails to count.
     * @example
     * // Count the number of UserDetails
     * const count = await prisma.userDetails.count({
     *   where: {
     *     // ... the filter for the UserDetails we want to count
     *   }
     * })
    **/
    count<T extends UserDetailsCountArgs>(
      args?: Subset<T, UserDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDetailsAggregateArgs>(args: Subset<T, UserDetailsAggregateArgs>): Prisma.PrismaPromise<GetUserDetailsAggregateType<T>>

    /**
     * Group by UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDetailsGroupByArgs['orderBy'] }
        : { orderBy?: UserDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDetails model
   */
  readonly fields: UserDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends UserDetails$groupsArgs<ExtArgs> = {}>(args?: Subset<T, UserDetails$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany"> | Null>
    UserToGroup<T extends UserDetails$UserToGroupArgs<ExtArgs> = {}>(args?: Subset<T, UserDetails$UserToGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDetails model
   */ 
  interface UserDetailsFieldRefs {
    readonly id: FieldRef<"UserDetails", 'Int'>
    readonly username: FieldRef<"UserDetails", 'String'>
    readonly description: FieldRef<"UserDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserDetails findUnique
   */
  export type UserDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findUniqueOrThrow
   */
  export type UserDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findFirst
   */
  export type UserDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findFirstOrThrow
   */
  export type UserDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findMany
   */
  export type UserDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails create
   */
  export type UserDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDetails.
     */
    data: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
  }

  /**
   * UserDetails createMany
   */
  export type UserDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetails createManyAndReturn
   */
  export type UserDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetails update
   */
  export type UserDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDetails.
     */
    data: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
    /**
     * Choose, which UserDetails to update.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails updateMany
   */
  export type UserDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
  }

  /**
   * UserDetails upsert
   */
  export type UserDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDetails to update in case it exists.
     */
    where: UserDetailsWhereUniqueInput
    /**
     * In case the UserDetails found by the `where` argument doesn't exist, create a new UserDetails with this data.
     */
    create: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
    /**
     * In case the UserDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
  }

  /**
   * UserDetails delete
   */
  export type UserDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter which UserDetails to delete.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails deleteMany
   */
  export type UserDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to delete
     */
    where?: UserDetailsWhereInput
  }

  /**
   * UserDetails.groups
   */
  export type UserDetails$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * UserDetails.UserToGroup
   */
  export type UserDetails$UserToGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    where?: UserToGroupWhereInput
    orderBy?: UserToGroupOrderByWithRelationInput | UserToGroupOrderByWithRelationInput[]
    cursor?: UserToGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserToGroupScalarFieldEnum | UserToGroupScalarFieldEnum[]
  }

  /**
   * UserDetails without action
   */
  export type UserDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Group$usersArgs<ExtArgs>
    UserToGroup?: boolean | Group$UserToGroupArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Group$usersArgs<ExtArgs>
    UserToGroup?: boolean | Group$UserToGroupArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      users: Prisma.$UserDetailsPayload<ExtArgs>[]
      UserToGroup: Prisma.$UserToGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findMany"> | Null>
    UserToGroup<T extends Group$UserToGroupArgs<ExtArgs> = {}>(args?: Subset<T, Group$UserToGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }

  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    where?: UserDetailsWhereInput
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    cursor?: UserDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * Group.UserToGroup
   */
  export type Group$UserToGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    where?: UserToGroupWhereInput
    orderBy?: UserToGroupOrderByWithRelationInput | UserToGroupOrderByWithRelationInput[]
    cursor?: UserToGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserToGroupScalarFieldEnum | UserToGroupScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model UserToGroup
   */

  export type AggregateUserToGroup = {
    _count: UserToGroupCountAggregateOutputType | null
    _avg: UserToGroupAvgAggregateOutputType | null
    _sum: UserToGroupSumAggregateOutputType | null
    _min: UserToGroupMinAggregateOutputType | null
    _max: UserToGroupMaxAggregateOutputType | null
  }

  export type UserToGroupAvgAggregateOutputType = {
    userId: number | null
    groupId: number | null
  }

  export type UserToGroupSumAggregateOutputType = {
    userId: number | null
    groupId: number | null
  }

  export type UserToGroupMinAggregateOutputType = {
    userId: number | null
    groupId: number | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type UserToGroupMaxAggregateOutputType = {
    userId: number | null
    groupId: number | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type UserToGroupCountAggregateOutputType = {
    userId: number
    groupId: number
    assignedAt: number
    assignedBy: number
    _all: number
  }


  export type UserToGroupAvgAggregateInputType = {
    userId?: true
    groupId?: true
  }

  export type UserToGroupSumAggregateInputType = {
    userId?: true
    groupId?: true
  }

  export type UserToGroupMinAggregateInputType = {
    userId?: true
    groupId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type UserToGroupMaxAggregateInputType = {
    userId?: true
    groupId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type UserToGroupCountAggregateInputType = {
    userId?: true
    groupId?: true
    assignedAt?: true
    assignedBy?: true
    _all?: true
  }

  export type UserToGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToGroup to aggregate.
     */
    where?: UserToGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToGroups to fetch.
     */
    orderBy?: UserToGroupOrderByWithRelationInput | UserToGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserToGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserToGroups
    **/
    _count?: true | UserToGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserToGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserToGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserToGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserToGroupMaxAggregateInputType
  }

  export type GetUserToGroupAggregateType<T extends UserToGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToGroup[P]>
      : GetScalarType<T[P], AggregateUserToGroup[P]>
  }




  export type UserToGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToGroupWhereInput
    orderBy?: UserToGroupOrderByWithAggregationInput | UserToGroupOrderByWithAggregationInput[]
    by: UserToGroupScalarFieldEnum[] | UserToGroupScalarFieldEnum
    having?: UserToGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserToGroupCountAggregateInputType | true
    _avg?: UserToGroupAvgAggregateInputType
    _sum?: UserToGroupSumAggregateInputType
    _min?: UserToGroupMinAggregateInputType
    _max?: UserToGroupMaxAggregateInputType
  }

  export type UserToGroupGroupByOutputType = {
    userId: number
    groupId: number
    assignedAt: Date
    assignedBy: string
    _count: UserToGroupCountAggregateOutputType | null
    _avg: UserToGroupAvgAggregateOutputType | null
    _sum: UserToGroupSumAggregateOutputType | null
    _min: UserToGroupMinAggregateOutputType | null
    _max: UserToGroupMaxAggregateOutputType | null
  }

  type GetUserToGroupGroupByPayload<T extends UserToGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserToGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserToGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserToGroupGroupByOutputType[P]>
            : GetScalarType<T[P], UserToGroupGroupByOutputType[P]>
        }
      >
    >


  export type UserToGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    user?: boolean | UserDetailsDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToGroup"]>

  export type UserToGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    user?: boolean | UserDetailsDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToGroup"]>

  export type UserToGroupSelectScalar = {
    userId?: boolean
    groupId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
  }

  export type UserToGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDetailsDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type UserToGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDetailsDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $UserToGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserToGroup"
    objects: {
      user: Prisma.$UserDetailsPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      groupId: number
      assignedAt: Date
      assignedBy: string
    }, ExtArgs["result"]["userToGroup"]>
    composites: {}
  }

  type UserToGroupGetPayload<S extends boolean | null | undefined | UserToGroupDefaultArgs> = $Result.GetResult<Prisma.$UserToGroupPayload, S>

  type UserToGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserToGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserToGroupCountAggregateInputType | true
    }

  export interface UserToGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserToGroup'], meta: { name: 'UserToGroup' } }
    /**
     * Find zero or one UserToGroup that matches the filter.
     * @param {UserToGroupFindUniqueArgs} args - Arguments to find a UserToGroup
     * @example
     * // Get one UserToGroup
     * const userToGroup = await prisma.userToGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserToGroupFindUniqueArgs>(args: SelectSubset<T, UserToGroupFindUniqueArgs<ExtArgs>>): Prisma__UserToGroupClient<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserToGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserToGroupFindUniqueOrThrowArgs} args - Arguments to find a UserToGroup
     * @example
     * // Get one UserToGroup
     * const userToGroup = await prisma.userToGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserToGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, UserToGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserToGroupClient<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserToGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToGroupFindFirstArgs} args - Arguments to find a UserToGroup
     * @example
     * // Get one UserToGroup
     * const userToGroup = await prisma.userToGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserToGroupFindFirstArgs>(args?: SelectSubset<T, UserToGroupFindFirstArgs<ExtArgs>>): Prisma__UserToGroupClient<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserToGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToGroupFindFirstOrThrowArgs} args - Arguments to find a UserToGroup
     * @example
     * // Get one UserToGroup
     * const userToGroup = await prisma.userToGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserToGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, UserToGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserToGroupClient<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserToGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserToGroups
     * const userToGroups = await prisma.userToGroup.findMany()
     * 
     * // Get first 10 UserToGroups
     * const userToGroups = await prisma.userToGroup.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userToGroupWithUserIdOnly = await prisma.userToGroup.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserToGroupFindManyArgs>(args?: SelectSubset<T, UserToGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserToGroup.
     * @param {UserToGroupCreateArgs} args - Arguments to create a UserToGroup.
     * @example
     * // Create one UserToGroup
     * const UserToGroup = await prisma.userToGroup.create({
     *   data: {
     *     // ... data to create a UserToGroup
     *   }
     * })
     * 
     */
    create<T extends UserToGroupCreateArgs>(args: SelectSubset<T, UserToGroupCreateArgs<ExtArgs>>): Prisma__UserToGroupClient<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserToGroups.
     * @param {UserToGroupCreateManyArgs} args - Arguments to create many UserToGroups.
     * @example
     * // Create many UserToGroups
     * const userToGroup = await prisma.userToGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserToGroupCreateManyArgs>(args?: SelectSubset<T, UserToGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserToGroups and returns the data saved in the database.
     * @param {UserToGroupCreateManyAndReturnArgs} args - Arguments to create many UserToGroups.
     * @example
     * // Create many UserToGroups
     * const userToGroup = await prisma.userToGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserToGroups and only return the `userId`
     * const userToGroupWithUserIdOnly = await prisma.userToGroup.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserToGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, UserToGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserToGroup.
     * @param {UserToGroupDeleteArgs} args - Arguments to delete one UserToGroup.
     * @example
     * // Delete one UserToGroup
     * const UserToGroup = await prisma.userToGroup.delete({
     *   where: {
     *     // ... filter to delete one UserToGroup
     *   }
     * })
     * 
     */
    delete<T extends UserToGroupDeleteArgs>(args: SelectSubset<T, UserToGroupDeleteArgs<ExtArgs>>): Prisma__UserToGroupClient<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserToGroup.
     * @param {UserToGroupUpdateArgs} args - Arguments to update one UserToGroup.
     * @example
     * // Update one UserToGroup
     * const userToGroup = await prisma.userToGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserToGroupUpdateArgs>(args: SelectSubset<T, UserToGroupUpdateArgs<ExtArgs>>): Prisma__UserToGroupClient<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserToGroups.
     * @param {UserToGroupDeleteManyArgs} args - Arguments to filter UserToGroups to delete.
     * @example
     * // Delete a few UserToGroups
     * const { count } = await prisma.userToGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserToGroupDeleteManyArgs>(args?: SelectSubset<T, UserToGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserToGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserToGroups
     * const userToGroup = await prisma.userToGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserToGroupUpdateManyArgs>(args: SelectSubset<T, UserToGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserToGroup.
     * @param {UserToGroupUpsertArgs} args - Arguments to update or create a UserToGroup.
     * @example
     * // Update or create a UserToGroup
     * const userToGroup = await prisma.userToGroup.upsert({
     *   create: {
     *     // ... data to create a UserToGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToGroup we want to update
     *   }
     * })
     */
    upsert<T extends UserToGroupUpsertArgs>(args: SelectSubset<T, UserToGroupUpsertArgs<ExtArgs>>): Prisma__UserToGroupClient<$Result.GetResult<Prisma.$UserToGroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserToGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToGroupCountArgs} args - Arguments to filter UserToGroups to count.
     * @example
     * // Count the number of UserToGroups
     * const count = await prisma.userToGroup.count({
     *   where: {
     *     // ... the filter for the UserToGroups we want to count
     *   }
     * })
    **/
    count<T extends UserToGroupCountArgs>(
      args?: Subset<T, UserToGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserToGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserToGroupAggregateArgs>(args: Subset<T, UserToGroupAggregateArgs>): Prisma.PrismaPromise<GetUserToGroupAggregateType<T>>

    /**
     * Group by UserToGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserToGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserToGroupGroupByArgs['orderBy'] }
        : { orderBy?: UserToGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserToGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserToGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserToGroup model
   */
  readonly fields: UserToGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserToGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDetailsDefaultArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserToGroup model
   */ 
  interface UserToGroupFieldRefs {
    readonly userId: FieldRef<"UserToGroup", 'Int'>
    readonly groupId: FieldRef<"UserToGroup", 'Int'>
    readonly assignedAt: FieldRef<"UserToGroup", 'DateTime'>
    readonly assignedBy: FieldRef<"UserToGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserToGroup findUnique
   */
  export type UserToGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserToGroup to fetch.
     */
    where: UserToGroupWhereUniqueInput
  }

  /**
   * UserToGroup findUniqueOrThrow
   */
  export type UserToGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserToGroup to fetch.
     */
    where: UserToGroupWhereUniqueInput
  }

  /**
   * UserToGroup findFirst
   */
  export type UserToGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserToGroup to fetch.
     */
    where?: UserToGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToGroups to fetch.
     */
    orderBy?: UserToGroupOrderByWithRelationInput | UserToGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserToGroups.
     */
    cursor?: UserToGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserToGroups.
     */
    distinct?: UserToGroupScalarFieldEnum | UserToGroupScalarFieldEnum[]
  }

  /**
   * UserToGroup findFirstOrThrow
   */
  export type UserToGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserToGroup to fetch.
     */
    where?: UserToGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToGroups to fetch.
     */
    orderBy?: UserToGroupOrderByWithRelationInput | UserToGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserToGroups.
     */
    cursor?: UserToGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserToGroups.
     */
    distinct?: UserToGroupScalarFieldEnum | UserToGroupScalarFieldEnum[]
  }

  /**
   * UserToGroup findMany
   */
  export type UserToGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserToGroups to fetch.
     */
    where?: UserToGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToGroups to fetch.
     */
    orderBy?: UserToGroupOrderByWithRelationInput | UserToGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserToGroups.
     */
    cursor?: UserToGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToGroups.
     */
    skip?: number
    distinct?: UserToGroupScalarFieldEnum | UserToGroupScalarFieldEnum[]
  }

  /**
   * UserToGroup create
   */
  export type UserToGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a UserToGroup.
     */
    data: XOR<UserToGroupCreateInput, UserToGroupUncheckedCreateInput>
  }

  /**
   * UserToGroup createMany
   */
  export type UserToGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserToGroups.
     */
    data: UserToGroupCreateManyInput | UserToGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserToGroup createManyAndReturn
   */
  export type UserToGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserToGroups.
     */
    data: UserToGroupCreateManyInput | UserToGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToGroup update
   */
  export type UserToGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a UserToGroup.
     */
    data: XOR<UserToGroupUpdateInput, UserToGroupUncheckedUpdateInput>
    /**
     * Choose, which UserToGroup to update.
     */
    where: UserToGroupWhereUniqueInput
  }

  /**
   * UserToGroup updateMany
   */
  export type UserToGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserToGroups.
     */
    data: XOR<UserToGroupUpdateManyMutationInput, UserToGroupUncheckedUpdateManyInput>
    /**
     * Filter which UserToGroups to update
     */
    where?: UserToGroupWhereInput
  }

  /**
   * UserToGroup upsert
   */
  export type UserToGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the UserToGroup to update in case it exists.
     */
    where: UserToGroupWhereUniqueInput
    /**
     * In case the UserToGroup found by the `where` argument doesn't exist, create a new UserToGroup with this data.
     */
    create: XOR<UserToGroupCreateInput, UserToGroupUncheckedCreateInput>
    /**
     * In case the UserToGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserToGroupUpdateInput, UserToGroupUncheckedUpdateInput>
  }

  /**
   * UserToGroup delete
   */
  export type UserToGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
    /**
     * Filter which UserToGroup to delete.
     */
    where: UserToGroupWhereUniqueInput
  }

  /**
   * UserToGroup deleteMany
   */
  export type UserToGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToGroups to delete
     */
    where?: UserToGroupWhereInput
  }

  /**
   * UserToGroup without action
   */
  export type UserToGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToGroup
     */
    select?: UserToGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToGroupInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const UserDetailsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    description: 'description'
  };

  export type UserDetailsScalarFieldEnum = (typeof UserDetailsScalarFieldEnum)[keyof typeof UserDetailsScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const UserToGroupScalarFieldEnum: {
    userId: 'userId',
    groupId: 'groupId',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy'
  };

  export type UserToGroupScalarFieldEnum = (typeof UserToGroupScalarFieldEnum)[keyof typeof UserToGroupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: IntFilter<"Test"> | number
    name?: StringFilter<"Test"> | string
    description?: StringFilter<"Test"> | string
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    name?: StringFilter<"Test"> | string
    description?: StringFilter<"Test"> | string
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test"> | number
    name?: StringWithAggregatesFilter<"Test"> | string
    description?: StringWithAggregatesFilter<"Test"> | string
  }

  export type UserDetailsWhereInput = {
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    id?: IntFilter<"UserDetails"> | number
    username?: StringFilter<"UserDetails"> | string
    description?: StringFilter<"UserDetails"> | string
    groups?: GroupListRelationFilter
    UserToGroup?: UserToGroupListRelationFilter
  }

  export type UserDetailsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    description?: SortOrder
    groups?: GroupOrderByRelationAggregateInput
    UserToGroup?: UserToGroupOrderByRelationAggregateInput
  }

  export type UserDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    username?: StringFilter<"UserDetails"> | string
    description?: StringFilter<"UserDetails"> | string
    groups?: GroupListRelationFilter
    UserToGroup?: UserToGroupListRelationFilter
  }, "id">

  export type UserDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    description?: SortOrder
    _count?: UserDetailsCountOrderByAggregateInput
    _avg?: UserDetailsAvgOrderByAggregateInput
    _max?: UserDetailsMaxOrderByAggregateInput
    _min?: UserDetailsMinOrderByAggregateInput
    _sum?: UserDetailsSumOrderByAggregateInput
  }

  export type UserDetailsScalarWhereWithAggregatesInput = {
    AND?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    OR?: UserDetailsScalarWhereWithAggregatesInput[]
    NOT?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserDetails"> | number
    username?: StringWithAggregatesFilter<"UserDetails"> | string
    description?: StringWithAggregatesFilter<"UserDetails"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    users?: UserDetailsListRelationFilter
    UserToGroup?: UserToGroupListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserDetailsOrderByRelationAggregateInput
    UserToGroup?: UserToGroupOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    users?: UserDetailsListRelationFilter
    UserToGroup?: UserToGroupListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
  }

  export type UserToGroupWhereInput = {
    AND?: UserToGroupWhereInput | UserToGroupWhereInput[]
    OR?: UserToGroupWhereInput[]
    NOT?: UserToGroupWhereInput | UserToGroupWhereInput[]
    userId?: IntFilter<"UserToGroup"> | number
    groupId?: IntFilter<"UserToGroup"> | number
    assignedAt?: DateTimeFilter<"UserToGroup"> | Date | string
    assignedBy?: StringFilter<"UserToGroup"> | string
    user?: XOR<UserDetailsRelationFilter, UserDetailsWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }

  export type UserToGroupOrderByWithRelationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    user?: UserDetailsOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type UserToGroupWhereUniqueInput = Prisma.AtLeast<{
    userId_groupId?: UserToGroupUserIdGroupIdCompoundUniqueInput
    AND?: UserToGroupWhereInput | UserToGroupWhereInput[]
    OR?: UserToGroupWhereInput[]
    NOT?: UserToGroupWhereInput | UserToGroupWhereInput[]
    userId?: IntFilter<"UserToGroup"> | number
    groupId?: IntFilter<"UserToGroup"> | number
    assignedAt?: DateTimeFilter<"UserToGroup"> | Date | string
    assignedBy?: StringFilter<"UserToGroup"> | string
    user?: XOR<UserDetailsRelationFilter, UserDetailsWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }, "userId_groupId">

  export type UserToGroupOrderByWithAggregationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    _count?: UserToGroupCountOrderByAggregateInput
    _avg?: UserToGroupAvgOrderByAggregateInput
    _max?: UserToGroupMaxOrderByAggregateInput
    _min?: UserToGroupMinOrderByAggregateInput
    _sum?: UserToGroupSumOrderByAggregateInput
  }

  export type UserToGroupScalarWhereWithAggregatesInput = {
    AND?: UserToGroupScalarWhereWithAggregatesInput | UserToGroupScalarWhereWithAggregatesInput[]
    OR?: UserToGroupScalarWhereWithAggregatesInput[]
    NOT?: UserToGroupScalarWhereWithAggregatesInput | UserToGroupScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserToGroup"> | number
    groupId?: IntWithAggregatesFilter<"UserToGroup"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"UserToGroup"> | Date | string
    assignedBy?: StringWithAggregatesFilter<"UserToGroup"> | string
  }

  export type TestCreateInput = {
    name: string
    description: string
  }

  export type TestUncheckedCreateInput = {
    id?: number
    name: string
    description: string
  }

  export type TestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type TestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailsCreateInput = {
    username: string
    description: string
    groups?: GroupCreateNestedManyWithoutUsersInput
    UserToGroup?: UserToGroupCreateNestedManyWithoutUserInput
  }

  export type UserDetailsUncheckedCreateInput = {
    id?: number
    username: string
    description: string
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput
    UserToGroup?: UserToGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserDetailsUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    groups?: GroupUpdateManyWithoutUsersNestedInput
    UserToGroup?: UserToGroupUpdateManyWithoutUserNestedInput
  }

  export type UserDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput
    UserToGroup?: UserToGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserDetailsCreateManyInput = {
    id?: number
    username: string
    description: string
  }

  export type UserDetailsUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    name: string
    users?: UserDetailsCreateNestedManyWithoutGroupsInput
    UserToGroup?: UserToGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserDetailsUncheckedCreateNestedManyWithoutGroupsInput
    UserToGroup?: UserToGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserDetailsUpdateManyWithoutGroupsNestedInput
    UserToGroup?: UserToGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserDetailsUncheckedUpdateManyWithoutGroupsNestedInput
    UserToGroup?: UserToGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserToGroupCreateInput = {
    assignedAt?: Date | string
    assignedBy: string
    user: UserDetailsCreateNestedOneWithoutUserToGroupInput
    group: GroupCreateNestedOneWithoutUserToGroupInput
  }

  export type UserToGroupUncheckedCreateInput = {
    userId: number
    groupId: number
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserToGroupUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    user?: UserDetailsUpdateOneRequiredWithoutUserToGroupNestedInput
    group?: GroupUpdateOneRequiredWithoutUserToGroupNestedInput
  }

  export type UserToGroupUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserToGroupCreateManyInput = {
    userId: number
    groupId: number
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserToGroupUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserToGroupUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type UserToGroupListRelationFilter = {
    every?: UserToGroupWhereInput
    some?: UserToGroupWhereInput
    none?: UserToGroupWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserToGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    description?: SortOrder
  }

  export type UserDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    description?: SortOrder
  }

  export type UserDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    description?: SortOrder
  }

  export type UserDetailsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserDetailsListRelationFilter = {
    every?: UserDetailsWhereInput
    some?: UserDetailsWhereInput
    none?: UserDetailsWhereInput
  }

  export type UserDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserDetailsRelationFilter = {
    is?: UserDetailsWhereInput
    isNot?: UserDetailsWhereInput
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type UserToGroupUserIdGroupIdCompoundUniqueInput = {
    userId: number
    groupId: number
  }

  export type UserToGroupCountOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserToGroupAvgOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type UserToGroupMaxOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserToGroupMinOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserToGroupSumOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GroupCreateNestedManyWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput> | GroupCreateWithoutUsersInput[] | GroupUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput | GroupCreateOrConnectWithoutUsersInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserToGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<UserToGroupCreateWithoutUserInput, UserToGroupUncheckedCreateWithoutUserInput> | UserToGroupCreateWithoutUserInput[] | UserToGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToGroupCreateOrConnectWithoutUserInput | UserToGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserToGroupCreateManyUserInputEnvelope
    connect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput> | GroupCreateWithoutUsersInput[] | GroupUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput | GroupCreateOrConnectWithoutUsersInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserToGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserToGroupCreateWithoutUserInput, UserToGroupUncheckedCreateWithoutUserInput> | UserToGroupCreateWithoutUserInput[] | UserToGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToGroupCreateOrConnectWithoutUserInput | UserToGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserToGroupCreateManyUserInputEnvelope
    connect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
  }

  export type GroupUpdateManyWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput> | GroupCreateWithoutUsersInput[] | GroupUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput | GroupCreateOrConnectWithoutUsersInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUsersInput | GroupUpsertWithWhereUniqueWithoutUsersInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUsersInput | GroupUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUsersInput | GroupUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserToGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserToGroupCreateWithoutUserInput, UserToGroupUncheckedCreateWithoutUserInput> | UserToGroupCreateWithoutUserInput[] | UserToGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToGroupCreateOrConnectWithoutUserInput | UserToGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserToGroupUpsertWithWhereUniqueWithoutUserInput | UserToGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserToGroupCreateManyUserInputEnvelope
    set?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    disconnect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    delete?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    connect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    update?: UserToGroupUpdateWithWhereUniqueWithoutUserInput | UserToGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserToGroupUpdateManyWithWhereWithoutUserInput | UserToGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserToGroupScalarWhereInput | UserToGroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput> | GroupCreateWithoutUsersInput[] | GroupUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput | GroupCreateOrConnectWithoutUsersInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUsersInput | GroupUpsertWithWhereUniqueWithoutUsersInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUsersInput | GroupUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUsersInput | GroupUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserToGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserToGroupCreateWithoutUserInput, UserToGroupUncheckedCreateWithoutUserInput> | UserToGroupCreateWithoutUserInput[] | UserToGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToGroupCreateOrConnectWithoutUserInput | UserToGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserToGroupUpsertWithWhereUniqueWithoutUserInput | UserToGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserToGroupCreateManyUserInputEnvelope
    set?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    disconnect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    delete?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    connect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    update?: UserToGroupUpdateWithWhereUniqueWithoutUserInput | UserToGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserToGroupUpdateManyWithWhereWithoutUserInput | UserToGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserToGroupScalarWhereInput | UserToGroupScalarWhereInput[]
  }

  export type UserDetailsCreateNestedManyWithoutGroupsInput = {
    create?: XOR<UserDetailsCreateWithoutGroupsInput, UserDetailsUncheckedCreateWithoutGroupsInput> | UserDetailsCreateWithoutGroupsInput[] | UserDetailsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutGroupsInput | UserDetailsCreateOrConnectWithoutGroupsInput[]
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
  }

  export type UserToGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserToGroupCreateWithoutGroupInput, UserToGroupUncheckedCreateWithoutGroupInput> | UserToGroupCreateWithoutGroupInput[] | UserToGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserToGroupCreateOrConnectWithoutGroupInput | UserToGroupCreateOrConnectWithoutGroupInput[]
    createMany?: UserToGroupCreateManyGroupInputEnvelope
    connect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
  }

  export type UserDetailsUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<UserDetailsCreateWithoutGroupsInput, UserDetailsUncheckedCreateWithoutGroupsInput> | UserDetailsCreateWithoutGroupsInput[] | UserDetailsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutGroupsInput | UserDetailsCreateOrConnectWithoutGroupsInput[]
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
  }

  export type UserToGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserToGroupCreateWithoutGroupInput, UserToGroupUncheckedCreateWithoutGroupInput> | UserToGroupCreateWithoutGroupInput[] | UserToGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserToGroupCreateOrConnectWithoutGroupInput | UserToGroupCreateOrConnectWithoutGroupInput[]
    createMany?: UserToGroupCreateManyGroupInputEnvelope
    connect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
  }

  export type UserDetailsUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<UserDetailsCreateWithoutGroupsInput, UserDetailsUncheckedCreateWithoutGroupsInput> | UserDetailsCreateWithoutGroupsInput[] | UserDetailsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutGroupsInput | UserDetailsCreateOrConnectWithoutGroupsInput[]
    upsert?: UserDetailsUpsertWithWhereUniqueWithoutGroupsInput | UserDetailsUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    disconnect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    delete?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    update?: UserDetailsUpdateWithWhereUniqueWithoutGroupsInput | UserDetailsUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: UserDetailsUpdateManyWithWhereWithoutGroupsInput | UserDetailsUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
  }

  export type UserToGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserToGroupCreateWithoutGroupInput, UserToGroupUncheckedCreateWithoutGroupInput> | UserToGroupCreateWithoutGroupInput[] | UserToGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserToGroupCreateOrConnectWithoutGroupInput | UserToGroupCreateOrConnectWithoutGroupInput[]
    upsert?: UserToGroupUpsertWithWhereUniqueWithoutGroupInput | UserToGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserToGroupCreateManyGroupInputEnvelope
    set?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    disconnect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    delete?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    connect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    update?: UserToGroupUpdateWithWhereUniqueWithoutGroupInput | UserToGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserToGroupUpdateManyWithWhereWithoutGroupInput | UserToGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserToGroupScalarWhereInput | UserToGroupScalarWhereInput[]
  }

  export type UserDetailsUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<UserDetailsCreateWithoutGroupsInput, UserDetailsUncheckedCreateWithoutGroupsInput> | UserDetailsCreateWithoutGroupsInput[] | UserDetailsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutGroupsInput | UserDetailsCreateOrConnectWithoutGroupsInput[]
    upsert?: UserDetailsUpsertWithWhereUniqueWithoutGroupsInput | UserDetailsUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    disconnect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    delete?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    update?: UserDetailsUpdateWithWhereUniqueWithoutGroupsInput | UserDetailsUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: UserDetailsUpdateManyWithWhereWithoutGroupsInput | UserDetailsUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
  }

  export type UserToGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserToGroupCreateWithoutGroupInput, UserToGroupUncheckedCreateWithoutGroupInput> | UserToGroupCreateWithoutGroupInput[] | UserToGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserToGroupCreateOrConnectWithoutGroupInput | UserToGroupCreateOrConnectWithoutGroupInput[]
    upsert?: UserToGroupUpsertWithWhereUniqueWithoutGroupInput | UserToGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserToGroupCreateManyGroupInputEnvelope
    set?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    disconnect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    delete?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    connect?: UserToGroupWhereUniqueInput | UserToGroupWhereUniqueInput[]
    update?: UserToGroupUpdateWithWhereUniqueWithoutGroupInput | UserToGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserToGroupUpdateManyWithWhereWithoutGroupInput | UserToGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserToGroupScalarWhereInput | UserToGroupScalarWhereInput[]
  }

  export type UserDetailsCreateNestedOneWithoutUserToGroupInput = {
    create?: XOR<UserDetailsCreateWithoutUserToGroupInput, UserDetailsUncheckedCreateWithoutUserToGroupInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserToGroupInput
    connect?: UserDetailsWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutUserToGroupInput = {
    create?: XOR<GroupCreateWithoutUserToGroupInput, GroupUncheckedCreateWithoutUserToGroupInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUserToGroupInput
    connect?: GroupWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserDetailsUpdateOneRequiredWithoutUserToGroupNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserToGroupInput, UserDetailsUncheckedCreateWithoutUserToGroupInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserToGroupInput
    upsert?: UserDetailsUpsertWithoutUserToGroupInput
    connect?: UserDetailsWhereUniqueInput
    update?: XOR<XOR<UserDetailsUpdateToOneWithWhereWithoutUserToGroupInput, UserDetailsUpdateWithoutUserToGroupInput>, UserDetailsUncheckedUpdateWithoutUserToGroupInput>
  }

  export type GroupUpdateOneRequiredWithoutUserToGroupNestedInput = {
    create?: XOR<GroupCreateWithoutUserToGroupInput, GroupUncheckedCreateWithoutUserToGroupInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUserToGroupInput
    upsert?: GroupUpsertWithoutUserToGroupInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUserToGroupInput, GroupUpdateWithoutUserToGroupInput>, GroupUncheckedUpdateWithoutUserToGroupInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GroupCreateWithoutUsersInput = {
    name: string
    UserToGroup?: UserToGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    UserToGroup?: UserToGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type UserToGroupCreateWithoutUserInput = {
    assignedAt?: Date | string
    assignedBy: string
    group: GroupCreateNestedOneWithoutUserToGroupInput
  }

  export type UserToGroupUncheckedCreateWithoutUserInput = {
    groupId: number
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserToGroupCreateOrConnectWithoutUserInput = {
    where: UserToGroupWhereUniqueInput
    create: XOR<UserToGroupCreateWithoutUserInput, UserToGroupUncheckedCreateWithoutUserInput>
  }

  export type UserToGroupCreateManyUserInputEnvelope = {
    data: UserToGroupCreateManyUserInput | UserToGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutUsersInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutUsersInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateManyWithWhereWithoutUsersInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutUsersInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
  }

  export type UserToGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: UserToGroupWhereUniqueInput
    update: XOR<UserToGroupUpdateWithoutUserInput, UserToGroupUncheckedUpdateWithoutUserInput>
    create: XOR<UserToGroupCreateWithoutUserInput, UserToGroupUncheckedCreateWithoutUserInput>
  }

  export type UserToGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: UserToGroupWhereUniqueInput
    data: XOR<UserToGroupUpdateWithoutUserInput, UserToGroupUncheckedUpdateWithoutUserInput>
  }

  export type UserToGroupUpdateManyWithWhereWithoutUserInput = {
    where: UserToGroupScalarWhereInput
    data: XOR<UserToGroupUpdateManyMutationInput, UserToGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type UserToGroupScalarWhereInput = {
    AND?: UserToGroupScalarWhereInput | UserToGroupScalarWhereInput[]
    OR?: UserToGroupScalarWhereInput[]
    NOT?: UserToGroupScalarWhereInput | UserToGroupScalarWhereInput[]
    userId?: IntFilter<"UserToGroup"> | number
    groupId?: IntFilter<"UserToGroup"> | number
    assignedAt?: DateTimeFilter<"UserToGroup"> | Date | string
    assignedBy?: StringFilter<"UserToGroup"> | string
  }

  export type UserDetailsCreateWithoutGroupsInput = {
    username: string
    description: string
    UserToGroup?: UserToGroupCreateNestedManyWithoutUserInput
  }

  export type UserDetailsUncheckedCreateWithoutGroupsInput = {
    id?: number
    username: string
    description: string
    UserToGroup?: UserToGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserDetailsCreateOrConnectWithoutGroupsInput = {
    where: UserDetailsWhereUniqueInput
    create: XOR<UserDetailsCreateWithoutGroupsInput, UserDetailsUncheckedCreateWithoutGroupsInput>
  }

  export type UserToGroupCreateWithoutGroupInput = {
    assignedAt?: Date | string
    assignedBy: string
    user: UserDetailsCreateNestedOneWithoutUserToGroupInput
  }

  export type UserToGroupUncheckedCreateWithoutGroupInput = {
    userId: number
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserToGroupCreateOrConnectWithoutGroupInput = {
    where: UserToGroupWhereUniqueInput
    create: XOR<UserToGroupCreateWithoutGroupInput, UserToGroupUncheckedCreateWithoutGroupInput>
  }

  export type UserToGroupCreateManyGroupInputEnvelope = {
    data: UserToGroupCreateManyGroupInput | UserToGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailsUpsertWithWhereUniqueWithoutGroupsInput = {
    where: UserDetailsWhereUniqueInput
    update: XOR<UserDetailsUpdateWithoutGroupsInput, UserDetailsUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserDetailsCreateWithoutGroupsInput, UserDetailsUncheckedCreateWithoutGroupsInput>
  }

  export type UserDetailsUpdateWithWhereUniqueWithoutGroupsInput = {
    where: UserDetailsWhereUniqueInput
    data: XOR<UserDetailsUpdateWithoutGroupsInput, UserDetailsUncheckedUpdateWithoutGroupsInput>
  }

  export type UserDetailsUpdateManyWithWhereWithoutGroupsInput = {
    where: UserDetailsScalarWhereInput
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyWithoutGroupsInput>
  }

  export type UserDetailsScalarWhereInput = {
    AND?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
    OR?: UserDetailsScalarWhereInput[]
    NOT?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
    id?: IntFilter<"UserDetails"> | number
    username?: StringFilter<"UserDetails"> | string
    description?: StringFilter<"UserDetails"> | string
  }

  export type UserToGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserToGroupWhereUniqueInput
    update: XOR<UserToGroupUpdateWithoutGroupInput, UserToGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<UserToGroupCreateWithoutGroupInput, UserToGroupUncheckedCreateWithoutGroupInput>
  }

  export type UserToGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserToGroupWhereUniqueInput
    data: XOR<UserToGroupUpdateWithoutGroupInput, UserToGroupUncheckedUpdateWithoutGroupInput>
  }

  export type UserToGroupUpdateManyWithWhereWithoutGroupInput = {
    where: UserToGroupScalarWhereInput
    data: XOR<UserToGroupUpdateManyMutationInput, UserToGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserDetailsCreateWithoutUserToGroupInput = {
    username: string
    description: string
    groups?: GroupCreateNestedManyWithoutUsersInput
  }

  export type UserDetailsUncheckedCreateWithoutUserToGroupInput = {
    id?: number
    username: string
    description: string
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserDetailsCreateOrConnectWithoutUserToGroupInput = {
    where: UserDetailsWhereUniqueInput
    create: XOR<UserDetailsCreateWithoutUserToGroupInput, UserDetailsUncheckedCreateWithoutUserToGroupInput>
  }

  export type GroupCreateWithoutUserToGroupInput = {
    name: string
    users?: UserDetailsCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutUserToGroupInput = {
    id?: number
    name: string
    users?: UserDetailsUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupCreateOrConnectWithoutUserToGroupInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUserToGroupInput, GroupUncheckedCreateWithoutUserToGroupInput>
  }

  export type UserDetailsUpsertWithoutUserToGroupInput = {
    update: XOR<UserDetailsUpdateWithoutUserToGroupInput, UserDetailsUncheckedUpdateWithoutUserToGroupInput>
    create: XOR<UserDetailsCreateWithoutUserToGroupInput, UserDetailsUncheckedCreateWithoutUserToGroupInput>
    where?: UserDetailsWhereInput
  }

  export type UserDetailsUpdateToOneWithWhereWithoutUserToGroupInput = {
    where?: UserDetailsWhereInput
    data: XOR<UserDetailsUpdateWithoutUserToGroupInput, UserDetailsUncheckedUpdateWithoutUserToGroupInput>
  }

  export type UserDetailsUpdateWithoutUserToGroupInput = {
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    groups?: GroupUpdateManyWithoutUsersNestedInput
  }

  export type UserDetailsUncheckedUpdateWithoutUserToGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type GroupUpsertWithoutUserToGroupInput = {
    update: XOR<GroupUpdateWithoutUserToGroupInput, GroupUncheckedUpdateWithoutUserToGroupInput>
    create: XOR<GroupCreateWithoutUserToGroupInput, GroupUncheckedCreateWithoutUserToGroupInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUserToGroupInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUserToGroupInput, GroupUncheckedUpdateWithoutUserToGroupInput>
  }

  export type GroupUpdateWithoutUserToGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserDetailsUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutUserToGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserDetailsUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type UserToGroupCreateManyUserInput = {
    groupId: number
    assignedAt?: Date | string
    assignedBy: string
  }

  export type GroupUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    UserToGroup?: UserToGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    UserToGroup?: UserToGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserToGroupUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutUserToGroupNestedInput
  }

  export type UserToGroupUncheckedUpdateWithoutUserInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserToGroupUncheckedUpdateManyWithoutUserInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserToGroupCreateManyGroupInput = {
    userId: number
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserDetailsUpdateWithoutGroupsInput = {
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    UserToGroup?: UserToGroupUpdateManyWithoutUserNestedInput
  }

  export type UserDetailsUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    UserToGroup?: UserToGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserDetailsUncheckedUpdateManyWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserToGroupUpdateWithoutGroupInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    user?: UserDetailsUpdateOneRequiredWithoutUserToGroupNestedInput
  }

  export type UserToGroupUncheckedUpdateWithoutGroupInput = {
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserToGroupUncheckedUpdateManyWithoutGroupInput = {
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDetailsCountOutputTypeDefaultArgs instead
     */
    export type UserDetailsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDetailsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestDefaultArgs instead
     */
    export type TestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDetailsDefaultArgs instead
     */
    export type UserDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserToGroupDefaultArgs instead
     */
    export type UserToGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserToGroupDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}