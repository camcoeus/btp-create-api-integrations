import { Moment } from 'moment';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Bills } from './Bills';
/**
 * Request builder class for operations supported on the {@link Bills} entity.
 */
export declare class BillsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Bills<T>, T> {
    /**
     * Returns a request builder for retrieving one `Bills` entity based on its keys.
     * @param entityId Key property. See {@link Bills.entityId}.
     * @param entityType Key property. See {@link Bills.entityType}.
     * @param fromDate Key property. See {@link Bills.fromDate}.
     * @param toDate Key property. See {@link Bills.toDate}.
     * @returns A request builder for creating requests to retrieve one `Bills` entity based on its keys.
     */
    getByKey(entityId: DeserializedType<T, 'Edm.String'>, entityType: DeserializedType<T, 'Edm.String'>, fromDate: DeserializedType<T, 'Edm.DateTime'>, toDate: DeserializedType<T, 'Edm.DateTime'>): GetByKeyRequestBuilder<Bills<T>, T>;
    /**
     * Returns a request builder for querying all `Bills` entities.
     * @returns A request builder for creating requests to retrieve all `Bills` entities.
     */
    getAll(): GetAllRequestBuilder<Bills<T>, T>;
    /**
     * Returns a request builder for creating a `Bills` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Bills`.
     */
    create(entity: Bills<T>): CreateRequestBuilder<Bills<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Bills`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Bills`.
     */
    update(entity: Bills<T>): UpdateRequestBuilder<Bills<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Bills`.
     * @param entityId Key property. See {@link Bills.entityId}.
     * @param entityType Key property. See {@link Bills.entityType}.
     * @param fromDate Key property. See {@link Bills.fromDate}.
     * @param toDate Key property. See {@link Bills.toDate}.
     * @returns A request builder for creating requests that delete an entity of type `Bills`.
     */
    delete(entityId: string, entityType: string, fromDate: Moment, toDate: Moment): DeleteRequestBuilder<Bills<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Bills`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Bills` by taking the entity as a parameter.
     */
    delete(entity: Bills<T>): DeleteRequestBuilder<Bills<T>, T>;
}
//# sourceMappingURL=BillsRequestBuilder.d.ts.map