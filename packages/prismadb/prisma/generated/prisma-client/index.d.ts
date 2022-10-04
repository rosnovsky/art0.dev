
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  name: string | null
  userId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Click
 * 
 */
export type Click = {
  id: string
  timestamp: Date
  country: string
  city: string
  shortsId: string
}

/**
 * Model Shorts
 * 
 */
export type Shorts = {
  id: string
  slug: string
  longUrl: string
  shortUrl: string
  createdAt: Date
  updatedAt: Date
  title: string
  favicon: string
  userId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.click`: Exposes CRUD operations for the **Click** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clicks
    * const clicks = await prisma.click.findMany()
    * ```
    */
  get click(): Prisma.ClickDelegate<GlobalReject>;

  /**
   * `prisma.shorts`: Exposes CRUD operations for the **Shorts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shorts
    * const shorts = await prisma.shorts.findMany()
    * ```
    */
  get shorts(): Prisma.ShortsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.4.0
   * Query Engine version: f352a33b70356f46311da8b00d83386dd9f145d6
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Click: 'Click',
    Shorts: 'Shorts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    shorts: number
  }

  export type UserCountOutputTypeSelect = {
    shorts?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    userId?: boolean
    shorts?: boolean | ShortsFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    shorts?: boolean | ShortsFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'shorts' ? Array < ShortsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'shorts' ? Array < ShortsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null, null>, Prisma__UserClient<UserGetPayload<T> | null, null>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null, null>, Prisma__UserClient<UserGetPayload<T> | null, null>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    shorts<T extends ShortsFindManyArgs = {}>(args?: Subset<T, ShortsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Shorts>| Null>, PrismaPromise<Array<ShortsGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Click
   */


  export type AggregateClick = {
    _count: ClickCountAggregateOutputType | null
    _min: ClickMinAggregateOutputType | null
    _max: ClickMaxAggregateOutputType | null
  }

  export type ClickMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    country: string | null
    city: string | null
    shortsId: string | null
  }

  export type ClickMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    country: string | null
    city: string | null
    shortsId: string | null
  }

  export type ClickCountAggregateOutputType = {
    id: number
    timestamp: number
    country: number
    city: number
    shortsId: number
    _all: number
  }


  export type ClickMinAggregateInputType = {
    id?: true
    timestamp?: true
    country?: true
    city?: true
    shortsId?: true
  }

  export type ClickMaxAggregateInputType = {
    id?: true
    timestamp?: true
    country?: true
    city?: true
    shortsId?: true
  }

  export type ClickCountAggregateInputType = {
    id?: true
    timestamp?: true
    country?: true
    city?: true
    shortsId?: true
    _all?: true
  }

  export type ClickAggregateArgs = {
    /**
     * Filter which Click to aggregate.
     * 
    **/
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clicks
    **/
    _count?: true | ClickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickMaxAggregateInputType
  }

  export type GetClickAggregateType<T extends ClickAggregateArgs> = {
        [P in keyof T & keyof AggregateClick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClick[P]>
      : GetScalarType<T[P], AggregateClick[P]>
  }




  export type ClickGroupByArgs = {
    where?: ClickWhereInput
    orderBy?: Enumerable<ClickOrderByWithAggregationInput>
    by: Array<ClickScalarFieldEnum>
    having?: ClickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickCountAggregateInputType | true
    _min?: ClickMinAggregateInputType
    _max?: ClickMaxAggregateInputType
  }


  export type ClickGroupByOutputType = {
    id: string
    timestamp: Date
    country: string
    city: string
    shortsId: string
    _count: ClickCountAggregateOutputType | null
    _min: ClickMinAggregateOutputType | null
    _max: ClickMaxAggregateOutputType | null
  }

  type GetClickGroupByPayload<T extends ClickGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClickGroupByOutputType[P]>
            : GetScalarType<T[P], ClickGroupByOutputType[P]>
        }
      >
    >


  export type ClickSelect = {
    id?: boolean
    timestamp?: boolean
    country?: boolean
    city?: boolean
    shortsId?: boolean
  }

  export type ClickGetPayload<
    S extends boolean | null | undefined | ClickArgs,
    U = keyof S
      > = S extends true
        ? Click
    : S extends undefined
    ? never
    : S extends ClickArgs | ClickFindManyArgs
    ?'include' extends U
    ? Click 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Click ? Click[P] : never
  } 
    : Click
  : Click


  type ClickCountArgs = Merge<
    Omit<ClickFindManyArgs, 'select' | 'include'> & {
      select?: ClickCountAggregateInputType | true
    }
  >

  export interface ClickDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Click that matches the filter.
     * @param {ClickFindUniqueArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClickFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClickFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Click'> extends True ? CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>> : CheckSelect<T, Prisma__ClickClient<Click | null, null>, Prisma__ClickClient<ClickGetPayload<T> | null, null>>

    /**
     * Find the first Click that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindFirstArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClickFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClickFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Click'> extends True ? CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>> : CheckSelect<T, Prisma__ClickClient<Click | null, null>, Prisma__ClickClient<ClickGetPayload<T> | null, null>>

    /**
     * Find zero or more Clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clicks
     * const clicks = await prisma.click.findMany()
     * 
     * // Get first 10 Clicks
     * const clicks = await prisma.click.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickWithIdOnly = await prisma.click.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClickFindManyArgs>(
      args?: SelectSubset<T, ClickFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Click>>, PrismaPromise<Array<ClickGetPayload<T>>>>

    /**
     * Create a Click.
     * @param {ClickCreateArgs} args - Arguments to create a Click.
     * @example
     * // Create one Click
     * const Click = await prisma.click.create({
     *   data: {
     *     // ... data to create a Click
     *   }
     * })
     * 
    **/
    create<T extends ClickCreateArgs>(
      args: SelectSubset<T, ClickCreateArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Create many Clicks.
     *     @param {ClickCreateManyArgs} args - Arguments to create many Clicks.
     *     @example
     *     // Create many Clicks
     *     const click = await prisma.click.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClickCreateManyArgs>(
      args?: SelectSubset<T, ClickCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Click.
     * @param {ClickDeleteArgs} args - Arguments to delete one Click.
     * @example
     * // Delete one Click
     * const Click = await prisma.click.delete({
     *   where: {
     *     // ... filter to delete one Click
     *   }
     * })
     * 
    **/
    delete<T extends ClickDeleteArgs>(
      args: SelectSubset<T, ClickDeleteArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Update one Click.
     * @param {ClickUpdateArgs} args - Arguments to update one Click.
     * @example
     * // Update one Click
     * const click = await prisma.click.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClickUpdateArgs>(
      args: SelectSubset<T, ClickUpdateArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Delete zero or more Clicks.
     * @param {ClickDeleteManyArgs} args - Arguments to filter Clicks to delete.
     * @example
     * // Delete a few Clicks
     * const { count } = await prisma.click.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClickDeleteManyArgs>(
      args?: SelectSubset<T, ClickDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clicks
     * const click = await prisma.click.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClickUpdateManyArgs>(
      args: SelectSubset<T, ClickUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Click.
     * @param {ClickUpsertArgs} args - Arguments to update or create a Click.
     * @example
     * // Update or create a Click
     * const click = await prisma.click.upsert({
     *   create: {
     *     // ... data to create a Click
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Click we want to update
     *   }
     * })
    **/
    upsert<T extends ClickUpsertArgs>(
      args: SelectSubset<T, ClickUpsertArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Find zero or more Clicks that matches the filter.
     * @param {ClickFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const click = await prisma.click.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ClickFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Click.
     * @param {ClickAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const click = await prisma.click.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ClickAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Click that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ClickFindUniqueOrThrowArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClickFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClickFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Find the first Click that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindFirstOrThrowArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClickFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClickFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ClickClient<Click>, Prisma__ClickClient<ClickGetPayload<T>>>

    /**
     * Count the number of Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickCountArgs} args - Arguments to filter Clicks to count.
     * @example
     * // Count the number of Clicks
     * const count = await prisma.click.count({
     *   where: {
     *     // ... the filter for the Clicks we want to count
     *   }
     * })
    **/
    count<T extends ClickCountArgs>(
      args?: Subset<T, ClickCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClickAggregateArgs>(args: Subset<T, ClickAggregateArgs>): PrismaPromise<GetClickAggregateType<T>>

    /**
     * Group by Click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickGroupByArgs} args - Group by arguments.
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
      T extends ClickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickGroupByArgs['orderBy'] }
        : { orderBy?: ClickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Click.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClickClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Click base type for findUnique actions
   */
  export type ClickFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Filter, which Click to fetch.
     * 
    **/
    where: ClickWhereUniqueInput
  }

  /**
   * Click: findUnique
   */
  export interface ClickFindUniqueArgs extends ClickFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Click base type for findFirst actions
   */
  export type ClickFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Filter, which Click to fetch.
     * 
    **/
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clicks.
     * 
    **/
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clicks.
     * 
    **/
    distinct?: Enumerable<ClickScalarFieldEnum>
  }

  /**
   * Click: findFirst
   */
  export interface ClickFindFirstArgs extends ClickFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Click findMany
   */
  export type ClickFindManyArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Filter, which Clicks to fetch.
     * 
    **/
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     * 
    **/
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clicks.
     * 
    **/
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClickScalarFieldEnum>
  }


  /**
   * Click create
   */
  export type ClickCreateArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * The data needed to create a Click.
     * 
    **/
    data: XOR<ClickCreateInput, ClickUncheckedCreateInput>
  }


  /**
   * Click createMany
   */
  export type ClickCreateManyArgs = {
    /**
     * The data used to create many Clicks.
     * 
    **/
    data: Enumerable<ClickCreateManyInput>
  }


  /**
   * Click update
   */
  export type ClickUpdateArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * The data needed to update a Click.
     * 
    **/
    data: XOR<ClickUpdateInput, ClickUncheckedUpdateInput>
    /**
     * Choose, which Click to update.
     * 
    **/
    where: ClickWhereUniqueInput
  }


  /**
   * Click updateMany
   */
  export type ClickUpdateManyArgs = {
    /**
     * The data used to update Clicks.
     * 
    **/
    data: XOR<ClickUpdateManyMutationInput, ClickUncheckedUpdateManyInput>
    /**
     * Filter which Clicks to update
     * 
    **/
    where?: ClickWhereInput
  }


  /**
   * Click upsert
   */
  export type ClickUpsertArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * The filter to search for the Click to update in case it exists.
     * 
    **/
    where: ClickWhereUniqueInput
    /**
     * In case the Click found by the `where` argument doesn't exist, create a new Click with this data.
     * 
    **/
    create: XOR<ClickCreateInput, ClickUncheckedCreateInput>
    /**
     * In case the Click was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClickUpdateInput, ClickUncheckedUpdateInput>
  }


  /**
   * Click delete
   */
  export type ClickDeleteArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
    /**
     * Filter which Click to delete.
     * 
    **/
    where: ClickWhereUniqueInput
  }


  /**
   * Click deleteMany
   */
  export type ClickDeleteManyArgs = {
    /**
     * Filter which Clicks to delete
     * 
    **/
    where?: ClickWhereInput
  }


  /**
   * Click findRaw
   */
  export type ClickFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Click aggregateRaw
   */
  export type ClickAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Click: findUniqueOrThrow
   */
  export type ClickFindUniqueOrThrowArgs = ClickFindUniqueArgsBase
      

  /**
   * Click: findFirstOrThrow
   */
  export type ClickFindFirstOrThrowArgs = ClickFindFirstArgsBase
      

  /**
   * Click without action
   */
  export type ClickArgs = {
    /**
     * Select specific fields to fetch from the Click
     * 
    **/
    select?: ClickSelect | null
  }



  /**
   * Model Shorts
   */


  export type AggregateShorts = {
    _count: ShortsCountAggregateOutputType | null
    _min: ShortsMinAggregateOutputType | null
    _max: ShortsMaxAggregateOutputType | null
  }

  export type ShortsMinAggregateOutputType = {
    id: string | null
    slug: string | null
    longUrl: string | null
    shortUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    favicon: string | null
    userId: string | null
  }

  export type ShortsMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    longUrl: string | null
    shortUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    favicon: string | null
    userId: string | null
  }

  export type ShortsCountAggregateOutputType = {
    id: number
    slug: number
    longUrl: number
    shortUrl: number
    createdAt: number
    updatedAt: number
    title: number
    favicon: number
    userId: number
    _all: number
  }


  export type ShortsMinAggregateInputType = {
    id?: true
    slug?: true
    longUrl?: true
    shortUrl?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    favicon?: true
    userId?: true
  }

  export type ShortsMaxAggregateInputType = {
    id?: true
    slug?: true
    longUrl?: true
    shortUrl?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    favicon?: true
    userId?: true
  }

  export type ShortsCountAggregateInputType = {
    id?: true
    slug?: true
    longUrl?: true
    shortUrl?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    favicon?: true
    userId?: true
    _all?: true
  }

  export type ShortsAggregateArgs = {
    /**
     * Filter which Shorts to aggregate.
     * 
    **/
    where?: ShortsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shorts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShortsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShortsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shorts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shorts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shorts
    **/
    _count?: true | ShortsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortsMaxAggregateInputType
  }

  export type GetShortsAggregateType<T extends ShortsAggregateArgs> = {
        [P in keyof T & keyof AggregateShorts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShorts[P]>
      : GetScalarType<T[P], AggregateShorts[P]>
  }




  export type ShortsGroupByArgs = {
    where?: ShortsWhereInput
    orderBy?: Enumerable<ShortsOrderByWithAggregationInput>
    by: Array<ShortsScalarFieldEnum>
    having?: ShortsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortsCountAggregateInputType | true
    _min?: ShortsMinAggregateInputType
    _max?: ShortsMaxAggregateInputType
  }


  export type ShortsGroupByOutputType = {
    id: string
    slug: string
    longUrl: string
    shortUrl: string
    createdAt: Date
    updatedAt: Date
    title: string
    favicon: string
    userId: string
    _count: ShortsCountAggregateOutputType | null
    _min: ShortsMinAggregateOutputType | null
    _max: ShortsMaxAggregateOutputType | null
  }

  type GetShortsGroupByPayload<T extends ShortsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShortsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortsGroupByOutputType[P]>
            : GetScalarType<T[P], ShortsGroupByOutputType[P]>
        }
      >
    >


  export type ShortsSelect = {
    id?: boolean
    slug?: boolean
    longUrl?: boolean
    shortUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    favicon?: boolean
    User?: boolean | UserArgs
    userId?: boolean
  }

  export type ShortsInclude = {
    User?: boolean | UserArgs
  }

  export type ShortsGetPayload<
    S extends boolean | null | undefined | ShortsArgs,
    U = keyof S
      > = S extends true
        ? Shorts
    : S extends undefined
    ? never
    : S extends ShortsArgs | ShortsFindManyArgs
    ?'include' extends U
    ? Shorts  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Shorts ? Shorts[P] : never
  } 
    : Shorts
  : Shorts


  type ShortsCountArgs = Merge<
    Omit<ShortsFindManyArgs, 'select' | 'include'> & {
      select?: ShortsCountAggregateInputType | true
    }
  >

  export interface ShortsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Shorts that matches the filter.
     * @param {ShortsFindUniqueArgs} args - Arguments to find a Shorts
     * @example
     * // Get one Shorts
     * const shorts = await prisma.shorts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShortsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShortsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Shorts'> extends True ? CheckSelect<T, Prisma__ShortsClient<Shorts>, Prisma__ShortsClient<ShortsGetPayload<T>>> : CheckSelect<T, Prisma__ShortsClient<Shorts | null, null>, Prisma__ShortsClient<ShortsGetPayload<T> | null, null>>

    /**
     * Find the first Shorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortsFindFirstArgs} args - Arguments to find a Shorts
     * @example
     * // Get one Shorts
     * const shorts = await prisma.shorts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShortsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShortsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Shorts'> extends True ? CheckSelect<T, Prisma__ShortsClient<Shorts>, Prisma__ShortsClient<ShortsGetPayload<T>>> : CheckSelect<T, Prisma__ShortsClient<Shorts | null, null>, Prisma__ShortsClient<ShortsGetPayload<T> | null, null>>

    /**
     * Find zero or more Shorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shorts
     * const shorts = await prisma.shorts.findMany()
     * 
     * // Get first 10 Shorts
     * const shorts = await prisma.shorts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortsWithIdOnly = await prisma.shorts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShortsFindManyArgs>(
      args?: SelectSubset<T, ShortsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Shorts>>, PrismaPromise<Array<ShortsGetPayload<T>>>>

    /**
     * Create a Shorts.
     * @param {ShortsCreateArgs} args - Arguments to create a Shorts.
     * @example
     * // Create one Shorts
     * const Shorts = await prisma.shorts.create({
     *   data: {
     *     // ... data to create a Shorts
     *   }
     * })
     * 
    **/
    create<T extends ShortsCreateArgs>(
      args: SelectSubset<T, ShortsCreateArgs>
    ): CheckSelect<T, Prisma__ShortsClient<Shorts>, Prisma__ShortsClient<ShortsGetPayload<T>>>

    /**
     * Create many Shorts.
     *     @param {ShortsCreateManyArgs} args - Arguments to create many Shorts.
     *     @example
     *     // Create many Shorts
     *     const shorts = await prisma.shorts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShortsCreateManyArgs>(
      args?: SelectSubset<T, ShortsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Shorts.
     * @param {ShortsDeleteArgs} args - Arguments to delete one Shorts.
     * @example
     * // Delete one Shorts
     * const Shorts = await prisma.shorts.delete({
     *   where: {
     *     // ... filter to delete one Shorts
     *   }
     * })
     * 
    **/
    delete<T extends ShortsDeleteArgs>(
      args: SelectSubset<T, ShortsDeleteArgs>
    ): CheckSelect<T, Prisma__ShortsClient<Shorts>, Prisma__ShortsClient<ShortsGetPayload<T>>>

    /**
     * Update one Shorts.
     * @param {ShortsUpdateArgs} args - Arguments to update one Shorts.
     * @example
     * // Update one Shorts
     * const shorts = await prisma.shorts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShortsUpdateArgs>(
      args: SelectSubset<T, ShortsUpdateArgs>
    ): CheckSelect<T, Prisma__ShortsClient<Shorts>, Prisma__ShortsClient<ShortsGetPayload<T>>>

    /**
     * Delete zero or more Shorts.
     * @param {ShortsDeleteManyArgs} args - Arguments to filter Shorts to delete.
     * @example
     * // Delete a few Shorts
     * const { count } = await prisma.shorts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShortsDeleteManyArgs>(
      args?: SelectSubset<T, ShortsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shorts
     * const shorts = await prisma.shorts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShortsUpdateManyArgs>(
      args: SelectSubset<T, ShortsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Shorts.
     * @param {ShortsUpsertArgs} args - Arguments to update or create a Shorts.
     * @example
     * // Update or create a Shorts
     * const shorts = await prisma.shorts.upsert({
     *   create: {
     *     // ... data to create a Shorts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shorts we want to update
     *   }
     * })
    **/
    upsert<T extends ShortsUpsertArgs>(
      args: SelectSubset<T, ShortsUpsertArgs>
    ): CheckSelect<T, Prisma__ShortsClient<Shorts>, Prisma__ShortsClient<ShortsGetPayload<T>>>

    /**
     * Find zero or more Shorts that matches the filter.
     * @param {ShortsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shorts = await prisma.shorts.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ShortsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Shorts.
     * @param {ShortsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shorts = await prisma.shorts.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ShortsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Shorts that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShortsFindUniqueOrThrowArgs} args - Arguments to find a Shorts
     * @example
     * // Get one Shorts
     * const shorts = await prisma.shorts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShortsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShortsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShortsClient<Shorts>, Prisma__ShortsClient<ShortsGetPayload<T>>>

    /**
     * Find the first Shorts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortsFindFirstOrThrowArgs} args - Arguments to find a Shorts
     * @example
     * // Get one Shorts
     * const shorts = await prisma.shorts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShortsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShortsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShortsClient<Shorts>, Prisma__ShortsClient<ShortsGetPayload<T>>>

    /**
     * Count the number of Shorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortsCountArgs} args - Arguments to filter Shorts to count.
     * @example
     * // Count the number of Shorts
     * const count = await prisma.shorts.count({
     *   where: {
     *     // ... the filter for the Shorts we want to count
     *   }
     * })
    **/
    count<T extends ShortsCountArgs>(
      args?: Subset<T, ShortsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShortsAggregateArgs>(args: Subset<T, ShortsAggregateArgs>): PrismaPromise<GetShortsAggregateType<T>>

    /**
     * Group by Shorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortsGroupByArgs} args - Group by arguments.
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
      T extends ShortsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortsGroupByArgs['orderBy'] }
        : { orderBy?: ShortsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ShortsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Shorts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShortsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | Null>, Prisma__UserClient<UserGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Shorts base type for findUnique actions
   */
  export type ShortsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Shorts
     * 
    **/
    select?: ShortsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShortsInclude | null
    /**
     * Filter, which Shorts to fetch.
     * 
    **/
    where: ShortsWhereUniqueInput
  }

  /**
   * Shorts: findUnique
   */
  export interface ShortsFindUniqueArgs extends ShortsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Shorts base type for findFirst actions
   */
  export type ShortsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Shorts
     * 
    **/
    select?: ShortsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShortsInclude | null
    /**
     * Filter, which Shorts to fetch.
     * 
    **/
    where?: ShortsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shorts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShortsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shorts.
     * 
    **/
    cursor?: ShortsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shorts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shorts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shorts.
     * 
    **/
    distinct?: Enumerable<ShortsScalarFieldEnum>
  }

  /**
   * Shorts: findFirst
   */
  export interface ShortsFindFirstArgs extends ShortsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Shorts findMany
   */
  export type ShortsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Shorts
     * 
    **/
    select?: ShortsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShortsInclude | null
    /**
     * Filter, which Shorts to fetch.
     * 
    **/
    where?: ShortsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shorts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShortsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shorts.
     * 
    **/
    cursor?: ShortsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shorts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shorts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShortsScalarFieldEnum>
  }


  /**
   * Shorts create
   */
  export type ShortsCreateArgs = {
    /**
     * Select specific fields to fetch from the Shorts
     * 
    **/
    select?: ShortsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShortsInclude | null
    /**
     * The data needed to create a Shorts.
     * 
    **/
    data: XOR<ShortsCreateInput, ShortsUncheckedCreateInput>
  }


  /**
   * Shorts createMany
   */
  export type ShortsCreateManyArgs = {
    /**
     * The data used to create many Shorts.
     * 
    **/
    data: Enumerable<ShortsCreateManyInput>
  }


  /**
   * Shorts update
   */
  export type ShortsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Shorts
     * 
    **/
    select?: ShortsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShortsInclude | null
    /**
     * The data needed to update a Shorts.
     * 
    **/
    data: XOR<ShortsUpdateInput, ShortsUncheckedUpdateInput>
    /**
     * Choose, which Shorts to update.
     * 
    **/
    where: ShortsWhereUniqueInput
  }


  /**
   * Shorts updateMany
   */
  export type ShortsUpdateManyArgs = {
    /**
     * The data used to update Shorts.
     * 
    **/
    data: XOR<ShortsUpdateManyMutationInput, ShortsUncheckedUpdateManyInput>
    /**
     * Filter which Shorts to update
     * 
    **/
    where?: ShortsWhereInput
  }


  /**
   * Shorts upsert
   */
  export type ShortsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Shorts
     * 
    **/
    select?: ShortsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShortsInclude | null
    /**
     * The filter to search for the Shorts to update in case it exists.
     * 
    **/
    where: ShortsWhereUniqueInput
    /**
     * In case the Shorts found by the `where` argument doesn't exist, create a new Shorts with this data.
     * 
    **/
    create: XOR<ShortsCreateInput, ShortsUncheckedCreateInput>
    /**
     * In case the Shorts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShortsUpdateInput, ShortsUncheckedUpdateInput>
  }


  /**
   * Shorts delete
   */
  export type ShortsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Shorts
     * 
    **/
    select?: ShortsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShortsInclude | null
    /**
     * Filter which Shorts to delete.
     * 
    **/
    where: ShortsWhereUniqueInput
  }


  /**
   * Shorts deleteMany
   */
  export type ShortsDeleteManyArgs = {
    /**
     * Filter which Shorts to delete
     * 
    **/
    where?: ShortsWhereInput
  }


  /**
   * Shorts findRaw
   */
  export type ShortsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Shorts aggregateRaw
   */
  export type ShortsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Shorts: findUniqueOrThrow
   */
  export type ShortsFindUniqueOrThrowArgs = ShortsFindUniqueArgsBase
      

  /**
   * Shorts: findFirstOrThrow
   */
  export type ShortsFindFirstOrThrowArgs = ShortsFindFirstArgsBase
      

  /**
   * Shorts without action
   */
  export type ShortsArgs = {
    /**
     * Select specific fields to fetch from the Shorts
     * 
    **/
    select?: ShortsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShortsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ClickScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    country: 'country',
    city: 'city',
    shortsId: 'shortsId'
  };

  export type ClickScalarFieldEnum = (typeof ClickScalarFieldEnum)[keyof typeof ClickScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ShortsScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    longUrl: 'longUrl',
    shortUrl: 'shortUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    favicon: 'favicon',
    userId: 'userId'
  };

  export type ShortsScalarFieldEnum = (typeof ShortsScalarFieldEnum)[keyof typeof ShortsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    userId?: StringFilter | string
    shorts?: ShortsListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    shorts?: ShortsOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    userId?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ClickWhereInput = {
    AND?: Enumerable<ClickWhereInput>
    OR?: Enumerable<ClickWhereInput>
    NOT?: Enumerable<ClickWhereInput>
    id?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    country?: StringFilter | string
    city?: StringFilter | string
    shortsId?: StringFilter | string
  }

  export type ClickOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    country?: SortOrder
    city?: SortOrder
    shortsId?: SortOrder
  }

  export type ClickWhereUniqueInput = {
    id?: string
  }

  export type ClickOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    country?: SortOrder
    city?: SortOrder
    shortsId?: SortOrder
    _count?: ClickCountOrderByAggregateInput
    _max?: ClickMaxOrderByAggregateInput
    _min?: ClickMinOrderByAggregateInput
  }

  export type ClickScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClickScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClickScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClickScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    country?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    shortsId?: StringWithAggregatesFilter | string
  }

  export type ShortsWhereInput = {
    AND?: Enumerable<ShortsWhereInput>
    OR?: Enumerable<ShortsWhereInput>
    NOT?: Enumerable<ShortsWhereInput>
    id?: StringFilter | string
    slug?: StringFilter | string
    longUrl?: StringFilter | string
    shortUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    favicon?: StringFilter | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
  }

  export type ShortsOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    favicon?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type ShortsWhereUniqueInput = {
    id?: string
    slug?: string
    longUrl?: string
  }

  export type ShortsOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    favicon?: SortOrder
    userId?: SortOrder
    _count?: ShortsCountOrderByAggregateInput
    _max?: ShortsMaxOrderByAggregateInput
    _min?: ShortsMinOrderByAggregateInput
  }

  export type ShortsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShortsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShortsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShortsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    longUrl?: StringWithAggregatesFilter | string
    shortUrl?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    favicon?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    userId: string
    shorts?: ShortsCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    userId: string
    shorts?: ShortsUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    shorts?: ShortsUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    shorts?: ShortsUncheckedUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickCreateInput = {
    id?: string
    timestamp?: Date | string
    country: string
    city: string
    shortsId: string
  }

  export type ClickUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    country: string
    city: string
    shortsId: string
  }

  export type ClickUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    shortsId?: StringFieldUpdateOperationsInput | string
  }

  export type ClickUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    shortsId?: StringFieldUpdateOperationsInput | string
  }

  export type ClickCreateManyInput = {
    id?: string
    timestamp?: Date | string
    country: string
    city: string
    shortsId: string
  }

  export type ClickUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    shortsId?: StringFieldUpdateOperationsInput | string
  }

  export type ClickUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    shortsId?: StringFieldUpdateOperationsInput | string
  }

  export type ShortsCreateInput = {
    id?: string
    slug: string
    longUrl: string
    shortUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    favicon?: string
    User: UserCreateNestedOneWithoutShortsInput
  }

  export type ShortsUncheckedCreateInput = {
    id?: string
    slug: string
    longUrl: string
    shortUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    favicon?: string
    userId: string
  }

  export type ShortsUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutShortsNestedInput
  }

  export type ShortsUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ShortsCreateManyInput = {
    id?: string
    slug: string
    longUrl: string
    shortUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    favicon?: string
    userId: string
  }

  export type ShortsUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
  }

  export type ShortsUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type ShortsListRelationFilter = {
    every?: ShortsWhereInput
    some?: ShortsWhereInput
    none?: ShortsWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ShortsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ClickCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    country?: SortOrder
    city?: SortOrder
    shortsId?: SortOrder
  }

  export type ClickMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    country?: SortOrder
    city?: SortOrder
    shortsId?: SortOrder
  }

  export type ClickMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    country?: SortOrder
    city?: SortOrder
    shortsId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShortsCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    favicon?: SortOrder
    userId?: SortOrder
  }

  export type ShortsMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    favicon?: SortOrder
    userId?: SortOrder
  }

  export type ShortsMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    favicon?: SortOrder
    userId?: SortOrder
  }

  export type ShortsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ShortsCreateWithoutUserInput>, Enumerable<ShortsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ShortsCreateOrConnectWithoutUserInput>
    createMany?: ShortsCreateManyUserInputEnvelope
    connect?: Enumerable<ShortsWhereUniqueInput>
  }

  export type ShortsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ShortsCreateWithoutUserInput>, Enumerable<ShortsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ShortsCreateOrConnectWithoutUserInput>
    createMany?: ShortsCreateManyUserInputEnvelope
    connect?: Enumerable<ShortsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ShortsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ShortsCreateWithoutUserInput>, Enumerable<ShortsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ShortsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ShortsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ShortsCreateManyUserInputEnvelope
    set?: Enumerable<ShortsWhereUniqueInput>
    disconnect?: Enumerable<ShortsWhereUniqueInput>
    delete?: Enumerable<ShortsWhereUniqueInput>
    connect?: Enumerable<ShortsWhereUniqueInput>
    update?: Enumerable<ShortsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ShortsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ShortsScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShortsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ShortsCreateWithoutUserInput>, Enumerable<ShortsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ShortsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ShortsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ShortsCreateManyUserInputEnvelope
    set?: Enumerable<ShortsWhereUniqueInput>
    disconnect?: Enumerable<ShortsWhereUniqueInput>
    delete?: Enumerable<ShortsWhereUniqueInput>
    connect?: Enumerable<ShortsWhereUniqueInput>
    update?: Enumerable<ShortsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ShortsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ShortsScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutShortsInput = {
    create?: XOR<UserCreateWithoutShortsInput, UserUncheckedCreateWithoutShortsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShortsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShortsNestedInput = {
    create?: XOR<UserCreateWithoutShortsInput, UserUncheckedCreateWithoutShortsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShortsInput
    upsert?: UserUpsertWithoutShortsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutShortsInput, UserUncheckedUpdateWithoutShortsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ShortsCreateWithoutUserInput = {
    id?: string
    slug: string
    longUrl: string
    shortUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    favicon?: string
  }

  export type ShortsUncheckedCreateWithoutUserInput = {
    id?: string
    slug: string
    longUrl: string
    shortUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    favicon?: string
  }

  export type ShortsCreateOrConnectWithoutUserInput = {
    where: ShortsWhereUniqueInput
    create: XOR<ShortsCreateWithoutUserInput, ShortsUncheckedCreateWithoutUserInput>
  }

  export type ShortsCreateManyUserInputEnvelope = {
    data: Enumerable<ShortsCreateManyUserInput>
  }

  export type ShortsUpsertWithWhereUniqueWithoutUserInput = {
    where: ShortsWhereUniqueInput
    update: XOR<ShortsUpdateWithoutUserInput, ShortsUncheckedUpdateWithoutUserInput>
    create: XOR<ShortsCreateWithoutUserInput, ShortsUncheckedCreateWithoutUserInput>
  }

  export type ShortsUpdateWithWhereUniqueWithoutUserInput = {
    where: ShortsWhereUniqueInput
    data: XOR<ShortsUpdateWithoutUserInput, ShortsUncheckedUpdateWithoutUserInput>
  }

  export type ShortsUpdateManyWithWhereWithoutUserInput = {
    where: ShortsScalarWhereInput
    data: XOR<ShortsUpdateManyMutationInput, ShortsUncheckedUpdateManyWithoutShortsInput>
  }

  export type ShortsScalarWhereInput = {
    AND?: Enumerable<ShortsScalarWhereInput>
    OR?: Enumerable<ShortsScalarWhereInput>
    NOT?: Enumerable<ShortsScalarWhereInput>
    id?: StringFilter | string
    slug?: StringFilter | string
    longUrl?: StringFilter | string
    shortUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    favicon?: StringFilter | string
    userId?: StringFilter | string
  }

  export type UserCreateWithoutShortsInput = {
    id?: string
    email: string
    name?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutShortsInput = {
    id?: string
    email: string
    name?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutShortsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShortsInput, UserUncheckedCreateWithoutShortsInput>
  }

  export type UserUpsertWithoutShortsInput = {
    update: XOR<UserUpdateWithoutShortsInput, UserUncheckedUpdateWithoutShortsInput>
    create: XOR<UserCreateWithoutShortsInput, UserUncheckedCreateWithoutShortsInput>
  }

  export type UserUpdateWithoutShortsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutShortsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortsCreateManyUserInput = {
    id?: string
    slug: string
    longUrl: string
    shortUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string
    favicon?: string
  }

  export type ShortsUpdateWithoutUserInput = {
    slug?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
  }

  export type ShortsUncheckedUpdateWithoutUserInput = {
    slug?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
  }

  export type ShortsUncheckedUpdateManyWithoutShortsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    favicon?: StringFieldUpdateOperationsInput | string
  }



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