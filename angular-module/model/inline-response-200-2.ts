/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InlineResponse200HydraView } from './inline-response200-hydra-view';
import { InlineResponse200HydraSearch } from './inline-response200-hydra-search';
import { OwnerJsonldLiteOwner } from './owner-jsonld-lite-owner';


export interface InlineResponse2002 { 
    'hydra:member': Array<OwnerJsonldLiteOwner>;
    'hydra:totalItems'?: number;
    'hydra:view'?: InlineResponse200HydraView;
    'hydra:search'?: InlineResponse200HydraSearch;
}
