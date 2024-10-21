import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Review extends jspb.Message {
  getId(): number;
  setId(value: number): Review;

  getUuid(): string;
  setUuid(value: string): Review;

  getContentId(): number;
  setContentId(value: number): Review;

  getUserId(): number;
  setUserId(value: number): Review;

  getStar(): number;
  setStar(value: number): Review;

  getTitle(): string;
  setTitle(value: string): Review;

  getDescription(): string;
  setDescription(value: string): Review;

  getPurchasedAt(): string;
  setPurchasedAt(value: string): Review;

  getCreatedAt(): string;
  setCreatedAt(value: string): Review;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Review;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Review;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Review.AsObject;
  static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
  static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Review;
  static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
}

export namespace Review {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    userId: number,
    star: number,
    title: string,
    description: string,
    purchasedAt: string,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  }
}

export class ReviewList extends jspb.Message {
  getReviewList(): Array<Review>;
  setReviewList(value: Array<Review>): ReviewList;
  clearReviewList(): ReviewList;
  addReview(value?: Review, index?: number): Review;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewList.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewList): ReviewList.AsObject;
  static serializeBinaryToWriter(message: ReviewList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewList;
  static deserializeBinaryFromReader(message: ReviewList, reader: jspb.BinaryReader): ReviewList;
}

export namespace ReviewList {
  export type AsObject = {
    reviewList: Array<Review.AsObject>,
  }
}

export class ReviewIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReviewIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewIdRequest): ReviewIdRequest.AsObject;
  static serializeBinaryToWriter(message: ReviewIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewIdRequest;
  static deserializeBinaryFromReader(message: ReviewIdRequest, reader: jspb.BinaryReader): ReviewIdRequest;
}

export namespace ReviewIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class ReviewIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): ReviewIdListRequest;
  clearIdList(): ReviewIdListRequest;
  addId(value: number, index?: number): ReviewIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewIdListRequest): ReviewIdListRequest.AsObject;
  static serializeBinaryToWriter(message: ReviewIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewIdListRequest;
  static deserializeBinaryFromReader(message: ReviewIdListRequest, reader: jspb.BinaryReader): ReviewIdListRequest;
}

export namespace ReviewIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class ReviewUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ReviewUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewUserIdRequest): ReviewUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ReviewUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewUserIdRequest;
  static deserializeBinaryFromReader(message: ReviewUserIdRequest, reader: jspb.BinaryReader): ReviewUserIdRequest;
}

export namespace ReviewUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class ReviewContentIdRequest extends jspb.Message {
  getContentId(): number;
  setContentId(value: number): ReviewContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewContentIdRequest): ReviewContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: ReviewContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewContentIdRequest;
  static deserializeBinaryFromReader(message: ReviewContentIdRequest, reader: jspb.BinaryReader): ReviewContentIdRequest;
}

export namespace ReviewContentIdRequest {
  export type AsObject = {
    contentId: number,
  }
}

export class ReviewBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): ReviewBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewBoolResponse): ReviewBoolResponse.AsObject;
  static serializeBinaryToWriter(message: ReviewBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewBoolResponse;
  static deserializeBinaryFromReader(message: ReviewBoolResponse, reader: jspb.BinaryReader): ReviewBoolResponse;
}

export namespace ReviewBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

