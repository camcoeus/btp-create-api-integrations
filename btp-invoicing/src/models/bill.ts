export interface Bill {
    billDetails: BillDetails;
    billGeneratedAt: Date;
    billGeneratedBy: string;
    billId: string;
    currency: string;
    description: null;
    emailId: null;
    entityId: string;
    entityName: string;
    entityType: string;
    firstName: null;
    fromDate: Date;
    isoffboarded: boolean;
    lastName: null;
    offboardedDate: null;
    status: string;
    toDate: Date;
    total: number;
}

interface BillDetails {
    developerId: string;
    developerName: string;
    startDate: string;
    endDate: string;
    bill: BillClass;
    apps: App[];
    firstName: string;
    lastName: string;
    emailId: string;
}

interface App {
    appName: string;
    appId: string;
    bill: BillClass;
    ratePlanSubscribed: Array<RatePlanSubscribed[]>;
}

interface BillClass {
    value: number;
    currency: string;
}

interface RatePlanSubscribed {
    productName: string;
    planType: string;
    ratePlanId: string;
    ratePlanName: string;
    bill: BillClass;
    calls: number;
}
