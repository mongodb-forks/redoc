import { ExtendedOpenAPIOperation } from '../services';
import { FieldModel } from '../services/models';
import { OpenAPIParser } from '../services/OpenAPIParser';
import {
  OpenAPIEncoding,
  OpenAPIMediaType,
  OpenAPIParameter,
  OpenAPIRequestBody,
  OpenAPIResponse,
  OpenAPISchema,
  OpenAPIServer,
  Referenced,
} from '../types';
export declare function isStatusCode(statusCode: string): boolean;
export declare function getStatusCodeType(
  statusCode: string | number,
  defaultAsError?: boolean,
): string;
export declare function isOperationName(key: string): boolean;
export declare function getOperationSummary(operation: ExtendedOpenAPIOperation): string;
export declare function detectType(schema: OpenAPISchema): string;
export declare function isPrimitiveType(
  schema: OpenAPISchema,
  type?: string | string[] | undefined,
): any;
export declare function isJsonLike(contentType: string): boolean;
export declare function isFormUrlEncoded(contentType: string): boolean;
export declare function urlFormEncodePayload(
  payload: object,
  encoding?: {
    [field: string]: OpenAPIEncoding;
  },
): string;
export declare function serializeParameterValueWithMime(value: any, mime: string): string;
export declare function serializeParameterValue(
  parameter:
    | (OpenAPIParameter & {
        serializationMime?: string;
      })
    | FieldModel,
  value: any,
): string;
export declare function getSerializedValue(field: FieldModel, example: any): any;
export declare function langFromMime(contentType: string): string;
export declare function isNamedDefinition(pointer?: string): boolean;
export declare function getDefinitionName(pointer?: string): string | undefined;
export declare function humanizeNumberRange(schema: OpenAPISchema): string | undefined;
export declare function humanizeConstraints(schema: OpenAPISchema): string[];
export declare function sortByRequired(fields: FieldModel[], order?: string[]): FieldModel[];
export declare function sortByField(
  fields: FieldModel[],
  param: keyof Pick<FieldModel, 'name' | 'description' | 'kind'>,
): FieldModel[];
export declare function mergeParams(
  parser: OpenAPIParser,
  pathParams?: Array<Referenced<OpenAPIParameter>>,
  operationParams?: Array<Referenced<OpenAPIParameter>>,
): Array<Referenced<OpenAPIParameter>>;
export declare function mergeSimilarMediaTypes(
  types: Record<string, OpenAPIMediaType>,
): Record<string, OpenAPIMediaType>;
export declare function expandDefaultServerVariables(url: string, variables?: object): string;
export declare function normalizeServers(
  specUrl: string | undefined,
  servers: OpenAPIServer[],
): OpenAPIServer[];
export declare const SECURITY_DEFINITIONS_JSX_NAME = 'SecurityDefinitions';
export declare const OLD_SECURITY_DEFINITIONS_JSX_NAME = 'security-definitions';
export declare const SCHEMA_DEFINITION_JSX_NAME = 'SchemaDefinition';
export declare let SECURITY_SCHEMES_SECTION_PREFIX: string;
export declare function setSecuritySchemePrefix(prefix: string): void;
export declare const shortenHTTPVerb: (verb: any) => any;
export declare function isRedocExtension(key: string): boolean;
export declare function extractExtensions(
  obj: object,
  showExtensions: string[] | true,
): Record<string, any>;
export declare function pluralizeType(displayType: string): string;
export declare function getContentWithLegacyExamples(info: OpenAPIRequestBody | OpenAPIResponse):
  | {
      [mime: string]: OpenAPIMediaType;
    }
  | undefined;
