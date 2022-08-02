/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchRequestBuilder, UpdateRequestBuilder, BatchChangeSet } from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { Bills } from './index';

/**
 * Batch builder for operations supported on the Apiportal Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(...requests: Array<ReadApiportalServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(requests: Array<ReadApiportalServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(first: undefined | ReadApiportalServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT> | Array<ReadApiportalServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>, ...rest: Array<ReadApiportalServiceRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>>): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultApiportalServicePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Apiportal Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(...requests: Array<WriteApiportalServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(requests: Array<WriteApiportalServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(first: undefined | WriteApiportalServiceRequestBuilder<DeSerializersT> | Array<WriteApiportalServiceRequestBuilder<DeSerializersT>>, ...rest: Array<WriteApiportalServiceRequestBuilder<DeSerializersT>>): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultApiportalServicePath = 'apiportal/api/1.0/Management.svc';
export type ReadApiportalServiceRequestBuilder<DeSerializersT extends DeSerializers> = GetAllRequestBuilder<Bills<DeSerializersT>, DeSerializersT> | GetByKeyRequestBuilder<Bills<DeSerializersT>, DeSerializersT>;
export type WriteApiportalServiceRequestBuilder<DeSerializersT extends DeSerializers> = CreateRequestBuilder<Bills<DeSerializersT>, DeSerializersT> | UpdateRequestBuilder<Bills<DeSerializersT>, DeSerializersT> | DeleteRequestBuilder<Bills<DeSerializersT>, DeSerializersT>;
