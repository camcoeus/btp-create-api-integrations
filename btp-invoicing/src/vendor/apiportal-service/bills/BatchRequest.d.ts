import { CreateRequestBuilder, DeleteRequestBuilder, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchRequestBuilder, UpdateRequestBuilder, BatchChangeSet } from '@sap-cloud-sdk/odata-v2';
import { Bills } from './index';
/**
 * Batch builder for operations supported on the Apiportal Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(...requests: Array<ReadApiportalServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(requests: Array<ReadApiportalServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Apiportal Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(...requests: Array<WriteApiportalServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(requests: Array<WriteApiportalServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export declare const defaultApiportalServicePath = "apiportal/api/1.0/Management.svc";
export declare type ReadApiportalServiceRequestBuilder<DeSerializersT extends DeSerializers> = GetAllRequestBuilder<Bills<DeSerializersT>, DeSerializersT> | GetByKeyRequestBuilder<Bills<DeSerializersT>, DeSerializersT>;
export declare type WriteApiportalServiceRequestBuilder<DeSerializersT extends DeSerializers> = CreateRequestBuilder<Bills<DeSerializersT>, DeSerializersT> | UpdateRequestBuilder<Bills<DeSerializersT>, DeSerializersT> | DeleteRequestBuilder<Bills<DeSerializersT>, DeSerializersT>;
//# sourceMappingURL=BatchRequest.d.ts.map