"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiportalService = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BillsApi_1 = require("./BillsApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function apiportalService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new ApiportalService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.apiportalService = apiportalService;
class ApiportalService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get billsApi() {
        return this.initApi('billsApi', BillsApi_1.BillsApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map