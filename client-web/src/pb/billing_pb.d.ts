import * as jspb from 'google-protobuf'



export class Billing extends jspb.Message {
  getId(): number;
  setId(value: number): Billing;

  getUuid(): string;
  setUuid(value: string): Billing;

  getUserId(): number;
  setUserId(value: number): Billing;

  getTitle(): string;
  setTitle(value: string): Billing;

  getNumber(): string;
  setNumber(value: string): Billing;

  getExpirationYear(): number;
  setExpirationYear(value: number): Billing;

  getExpirationMonth(): number;
  setExpirationMonth(value: number): Billing;

  getSecurityCode(): string;
  setSecurityCode(value: string): Billing;

  getName(): string;
  setName(value: string): Billing;

  getPassword(): string;
  setPassword(value: string): Billing;

  getService(): Billing.Service;
  setService(value: Billing.Service): Billing;

  getIsRegistered(): boolean;
  setIsRegistered(value: boolean): Billing;

  getCreatedAt(): string;
  setCreatedAt(value: string): Billing;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Billing;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Billing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Billing.AsObject;
  static toObject(includeInstance: boolean, msg: Billing): Billing.AsObject;
  static serializeBinaryToWriter(message: Billing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Billing;
  static deserializeBinaryFromReader(message: Billing, reader: jspb.BinaryReader): Billing;
}

export namespace Billing {
  export type AsObject = {
    id: number,
    uuid: string,
    userId: number,
    title: string,
    number: string,
    expirationYear: number,
    expirationMonth: number,
    securityCode: string,
    name: string,
    password: string,
    service: Billing.Service,
    isRegistered: boolean,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  }

  export enum Service { 
    NONE = 0,
    CREDIT = 1,
    BANK = 2,
    CASH = 3,
    PAYPAL = 4,
  }
}

export class BillingList extends jspb.Message {
  getBillingList(): Array<Billing>;
  setBillingList(value: Array<Billing>): BillingList;
  clearBillingList(): BillingList;
  addBilling(value?: Billing, index?: number): Billing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingList.AsObject;
  static toObject(includeInstance: boolean, msg: BillingList): BillingList.AsObject;
  static serializeBinaryToWriter(message: BillingList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingList;
  static deserializeBinaryFromReader(message: BillingList, reader: jspb.BinaryReader): BillingList;
}

export namespace BillingList {
  export type AsObject = {
    billingList: Array<Billing.AsObject>,
  }
}

export class BillingIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): BillingIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BillingIdRequest): BillingIdRequest.AsObject;
  static serializeBinaryToWriter(message: BillingIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingIdRequest;
  static deserializeBinaryFromReader(message: BillingIdRequest, reader: jspb.BinaryReader): BillingIdRequest;
}

export namespace BillingIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class BillingUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): BillingUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BillingUuidRequest): BillingUuidRequest.AsObject;
  static serializeBinaryToWriter(message: BillingUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingUuidRequest;
  static deserializeBinaryFromReader(message: BillingUuidRequest, reader: jspb.BinaryReader): BillingUuidRequest;
}

export namespace BillingUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class BillingIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): BillingIdListRequest;
  clearIdList(): BillingIdListRequest;
  addId(value: number, index?: number): BillingIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BillingIdListRequest): BillingIdListRequest.AsObject;
  static serializeBinaryToWriter(message: BillingIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingIdListRequest;
  static deserializeBinaryFromReader(message: BillingIdListRequest, reader: jspb.BinaryReader): BillingIdListRequest;
}

export namespace BillingIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class BillingUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): BillingUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BillingUserIdRequest): BillingUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: BillingUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingUserIdRequest;
  static deserializeBinaryFromReader(message: BillingUserIdRequest, reader: jspb.BinaryReader): BillingUserIdRequest;
}

export namespace BillingUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class BillingBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): BillingBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BillingBoolResponse): BillingBoolResponse.AsObject;
  static serializeBinaryToWriter(message: BillingBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingBoolResponse;
  static deserializeBinaryFromReader(message: BillingBoolResponse, reader: jspb.BinaryReader): BillingBoolResponse;
}

export namespace BillingBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

