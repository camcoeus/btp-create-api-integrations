import { Bills } from './Bills';
import { BillsRequestBuilder } from './BillsRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, EntityBuilderType, EntityApi } from '@sap-cloud-sdk/odata-v2';
export declare class BillsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Bills<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Bills;
    requestBuilder(): BillsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Bills<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Bills<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): any;
    private _schema?;
    get schema(): {
        BILL_DETAILS: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        BILL_GENERATED_AT: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.DateTime", true, true>;
        BILL_GENERATED_BY: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        BILL_ID: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        CURRENCY: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        DESCRIPTION: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        EMAIL_ID: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        ENTITY_ID: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", false, true>;
        ENTITY_NAME: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        ENTITY_TYPE: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", false, true>;
        FIRST_NAME: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        FROM_DATE: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.DateTime", false, true>;
        ISOFFBOARDED: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.Boolean", true, true>;
        LAST_NAME: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        OFFBOARDED_DATE: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.DateTime", true, true>;
        STATUS: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.String", true, true>;
        TO_DATE: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.DateTime", false, true>;
        TOTAL: OrderableEdmTypeField<Bills<DeSerializers>, DeSerializersT, "Edm.Double", true, true>;
        ALL_FIELDS: AllFields<Bills<DeSerializers>>;
    };
}
//# sourceMappingURL=BillsApi.d.ts.map