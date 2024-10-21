import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Content extends jspb.Message {
  getId(): number;
  setId(value: number): Content;

  getUuid(): string;
  setUuid(value: string): Content;

  getUserId(): number;
  setUserId(value: number): Content;

  getTitle(): string;
  setTitle(value: string): Content;

  getDescription(): string;
  setDescription(value: string): Content;

  getThumbnail(): string;
  setThumbnail(value: string): Content;

  getPrice(): number;
  setPrice(value: number): Content;

  getAspRate(): number;
  setAspRate(value: number): Content;

  getRequestProgress(): boolean;
  setRequestProgress(value: boolean): Content;

  getIsOpen(): boolean;
  setIsOpen(value: boolean): Content;

  getCreatedAt(): string;
  setCreatedAt(value: string): Content;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Content;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Content;

  getDetailsList(): Array<ContentDetail>;
  setDetailsList(value: Array<ContentDetail>): Content;
  clearDetailsList(): Content;
  addDetails(value?: ContentDetail, index?: number): ContentDetail;

  getToolsList(): Array<ContentTool>;
  setToolsList(value: Array<ContentTool>): Content;
  clearToolsList(): Content;
  addTools(value?: ContentTool, index?: number): ContentTool;

  getCategoriesList(): Array<ContentCategory>;
  setCategoriesList(value: Array<ContentCategory>): Content;
  clearCategoriesList(): Content;
  addCategories(value?: ContentCategory, index?: number): ContentCategory;

  getSubCategoriesList(): Array<ContentSubCategory>;
  setSubCategoriesList(value: Array<ContentSubCategory>): Content;
  clearSubCategoriesList(): Content;
  addSubCategories(value?: ContentSubCategory, index?: number): ContentSubCategory;

  getPreviewsList(): Array<ContentPreview>;
  setPreviewsList(value: Array<ContentPreview>): Content;
  clearPreviewsList(): Content;
  addPreviews(value?: ContentPreview, index?: number): ContentPreview;

  getLikeCount(): number;
  setLikeCount(value: number): Content;

  getImpressionCount(): number;
  setImpressionCount(value: number): Content;

  getViewCount(): number;
  setViewCount(value: number): Content;

  getClickCount(): number;
  setClickCount(value: number): Content;

  getOrderCount(): number;
  setOrderCount(value: number): Content;

  getPurchaseCount(): number;
  setPurchaseCount(value: number): Content;

  getReviewCount(): number;
  setReviewCount(value: number): Content;

  getShareCount(): number;
  setShareCount(value: number): Content;

  getAspCount(): number;
  setAspCount(value: number): Content;

  getCurrency(): Content.Currency;
  setCurrency(value: Content.Currency): Content;

  getStarRate(): number;
  setStarRate(value: number): Content;

  getUserName(): number;
  setUserName(value: number): Content;

  getUserIcon(): number;
  setUserIcon(value: number): Content;

  getUserDescription(): number;
  setUserDescription(value: number): Content;

  getIsLiked(): boolean;
  setIsLiked(value: boolean): Content;

  getIsPurchased(): boolean;
  setIsPurchased(value: boolean): Content;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Content.AsObject;
  static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
  static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Content;
  static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
}

export namespace Content {
  export type AsObject = {
    id: number,
    uuid: string,
    userId: number,
    title: string,
    description: string,
    thumbnail: string,
    price: number,
    aspRate: number,
    requestProgress: boolean,
    isOpen: boolean,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
    detailsList: Array<ContentDetail.AsObject>,
    toolsList: Array<ContentTool.AsObject>,
    categoriesList: Array<ContentCategory.AsObject>,
    subCategoriesList: Array<ContentSubCategory.AsObject>,
    previewsList: Array<ContentPreview.AsObject>,
    likeCount: number,
    impressionCount: number,
    viewCount: number,
    clickCount: number,
    orderCount: number,
    purchaseCount: number,
    reviewCount: number,
    shareCount: number,
    aspCount: number,
    currency: Content.Currency,
    starRate: number,
    userName: number,
    userIcon: number,
    userDescription: number,
    isLiked: boolean,
    isPurchased: boolean,
  }

  export enum Currency { 
    USD = 0,
    JPY = 1,
    EUR = 2,
    GBP = 3,
  }
}

export class ContentPreview extends jspb.Message {
  getId(): number;
  setId(value: number): ContentPreview;

  getUuid(): string;
  setUuid(value: string): ContentPreview;

  getContentId(): number;
  setContentId(value: number): ContentPreview;

  getPreviewInput(): string;
  setPreviewInput(value: string): ContentPreview;

  getPreviewOutput(): string;
  setPreviewOutput(value: string): ContentPreview;

  getCreatedAt(): string;
  setCreatedAt(value: string): ContentPreview;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): ContentPreview;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentPreview.AsObject;
  static toObject(includeInstance: boolean, msg: ContentPreview): ContentPreview.AsObject;
  static serializeBinaryToWriter(message: ContentPreview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentPreview;
  static deserializeBinaryFromReader(message: ContentPreview, reader: jspb.BinaryReader): ContentPreview;
}

export namespace ContentPreview {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    previewInput: string,
    previewOutput: string,
    createdAt: string,
    updatedAt: string,
  }
}

export class ContentDetail extends jspb.Message {
  getId(): number;
  setId(value: number): ContentDetail;

  getUuid(): string;
  setUuid(value: string): ContentDetail;

  getContentId(): number;
  setContentId(value: number): ContentDetail;

  getPrompt(): string;
  setPrompt(value: string): ContentDetail;

  getTestingPrompt(): string;
  setTestingPrompt(value: string): ContentDetail;

  getEngine(): number;
  setEngine(value: number): ContentDetail;

  getPromptInstruction(): string;
  setPromptInstruction(value: string): ContentDetail;

  getUrl(): string;
  setUrl(value: string): ContentDetail;

  getCreatedAt(): string;
  setCreatedAt(value: string): ContentDetail;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): ContentDetail;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): ContentDetail;

  getStableDiffusionModel(): ContentDetail.StableDiffusionModel;
  setStableDiffusionModel(value: ContentDetail.StableDiffusionModel): ContentDetail;

  getStableDiffusionSampler(): ContentDetail.StableDiffusionSampler;
  setStableDiffusionSampler(value: ContentDetail.StableDiffusionSampler): ContentDetail;

  getImageWidth(): number;
  setImageWidth(value: number): ContentDetail;

  getImageHeight(): number;
  setImageHeight(value: number): ContentDetail;

  getCfgScale(): number;
  setCfgScale(value: number): ContentDetail;

  getSteps(): number;
  setSteps(value: number): ContentDetail;

  getSeed(): string;
  setSeed(value: string): ContentDetail;

  getClipGuidance(): boolean;
  setClipGuidance(value: boolean): ContentDetail;

  getNagativePrompt(): string;
  setNagativePrompt(value: string): ContentDetail;

  getTitle(): string;
  setTitle(value: string): ContentDetail;

  getDescription(): string;
  setDescription(value: string): ContentDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ContentDetail): ContentDetail.AsObject;
  static serializeBinaryToWriter(message: ContentDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentDetail;
  static deserializeBinaryFromReader(message: ContentDetail, reader: jspb.BinaryReader): ContentDetail;
}

export namespace ContentDetail {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    prompt: string,
    testingPrompt: string,
    engine: number,
    promptInstruction: string,
    url: string,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
    stableDiffusionModel: ContentDetail.StableDiffusionModel,
    stableDiffusionSampler: ContentDetail.StableDiffusionSampler,
    imageWidth: number,
    imageHeight: number,
    cfgScale: number,
    steps: number,
    seed: string,
    clipGuidance: boolean,
    nagativePrompt: string,
    title: string,
    description: string,
  }

  export enum StableDiffusionModel { 
    V_1_4 = 0,
    V_1_5 = 1,
    V_2_0 = 2,
    V_2_0_768 = 3,
    V_2_1 = 4,
    V_2_1_768 = 5,
  }

  export enum StableDiffusionSampler { 
    DDIM = 0,
    PLMS = 1,
    K_EULER = 2,
    K_ENLER_ANCESTRAL = 3,
    K_HEUN = 4,
    K_DPM2 = 5,
    K_DPM2_ANCESTRAL = 6,
    K_LMS = 7,
    K_DPMPP_2S_ANCESTRAL = 8,
    K_DPMPP_2M = 9,
  }
}

export class ContentTool extends jspb.Message {
  getId(): number;
  setId(value: number): ContentTool;

  getUuid(): string;
  setUuid(value: string): ContentTool;

  getContentId(): number;
  setContentId(value: number): ContentTool;

  getTool(): ContentTool.Tool;
  setTool(value: ContentTool.Tool): ContentTool;

  getCreatedAt(): string;
  setCreatedAt(value: string): ContentTool;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): ContentTool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentTool.AsObject;
  static toObject(includeInstance: boolean, msg: ContentTool): ContentTool.AsObject;
  static serializeBinaryToWriter(message: ContentTool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentTool;
  static deserializeBinaryFromReader(message: ContentTool, reader: jspb.BinaryReader): ContentTool;
}

export namespace ContentTool {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    tool: ContentTool.Tool,
    createdAt: string,
    updatedAt: string,
  }

  export enum Tool { 
    TOOL_UNKNOWN = 0,
    CHATGPT = 1,
    GPT_3 = 2,
    DALL_E = 3,
    STABLE_DIFFUSION = 4,
    MIDJOURNEY = 5,
  }
}

export class ContentCategory extends jspb.Message {
  getId(): number;
  setId(value: number): ContentCategory;

  getUuid(): string;
  setUuid(value: string): ContentCategory;

  getContentId(): number;
  setContentId(value: number): ContentCategory;

  getCategory(): ContentCategory.Category;
  setCategory(value: ContentCategory.Category): ContentCategory;

  getCreatedAt(): string;
  setCreatedAt(value: string): ContentCategory;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): ContentCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ContentCategory): ContentCategory.AsObject;
  static serializeBinaryToWriter(message: ContentCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentCategory;
  static deserializeBinaryFromReader(message: ContentCategory, reader: jspb.BinaryReader): ContentCategory;
}

export namespace ContentCategory {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    category: ContentCategory.Category,
    createdAt: string,
    updatedAt: string,
  }

  export enum Category { 
    YOUTUBE = 0,
    TWITTER = 1,
    INSTAGRAM = 2,
    FACEBOOK = 3,
    LINKEDIN = 4,
    TIKTOK = 5,
    PINTEREST = 6,
    REDDIT = 7,
    SNAPCHAT = 8,
    TUMBLR = 9,
    TWITCH = 10,
    WEIBO = 11,
    WECHAT = 12,
    WHATSAPP = 13,
    LINE = 14,
    TELEGRAM = 15,
    VK = 16,
    YAHOO = 17,
    OTHER = 18,
  }
}

export class ContentSubCategory extends jspb.Message {
  getId(): number;
  setId(value: number): ContentSubCategory;

  getUuid(): string;
  setUuid(value: string): ContentSubCategory;

  getContentId(): number;
  setContentId(value: number): ContentSubCategory;

  getSubCategory(): ContentSubCategory.SubCategory;
  setSubCategory(value: ContentSubCategory.SubCategory): ContentSubCategory;

  getCreatedAt(): string;
  setCreatedAt(value: string): ContentSubCategory;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): ContentSubCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentSubCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ContentSubCategory): ContentSubCategory.AsObject;
  static serializeBinaryToWriter(message: ContentSubCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentSubCategory;
  static deserializeBinaryFromReader(message: ContentSubCategory, reader: jspb.BinaryReader): ContentSubCategory;
}

export namespace ContentSubCategory {
  export type AsObject = {
    id: number,
    uuid: string,
    contentId: number,
    subCategory: ContentSubCategory.SubCategory,
    createdAt: string,
    updatedAt: string,
  }

  export enum SubCategory { 
    YOUTUBE = 0,
    TWITTER = 1,
    INSTAGRAM = 2,
    FACEBOOK = 3,
    LINKEDIN = 4,
    TIKTOK = 5,
    PINTEREST = 6,
    REDDIT = 7,
    SNAPCHAT = 8,
    TUMBLR = 9,
    TWITCH = 10,
    WEIBO = 11,
    WECHAT = 12,
    WHATSAPP = 13,
    LINE = 14,
    TELEGRAM = 15,
    VK = 16,
    YAHOO = 17,
    OTHER = 18,
  }
}

export class ContentList extends jspb.Message {
  getContentList(): Array<Content>;
  setContentList(value: Array<Content>): ContentList;
  clearContentList(): ContentList;
  addContent(value?: Content, index?: number): Content;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentList.AsObject;
  static toObject(includeInstance: boolean, msg: ContentList): ContentList.AsObject;
  static serializeBinaryToWriter(message: ContentList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentList;
  static deserializeBinaryFromReader(message: ContentList, reader: jspb.BinaryReader): ContentList;
}

export namespace ContentList {
  export type AsObject = {
    contentList: Array<Content.AsObject>,
  }
}

export class ContentIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ContentIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContentIdRequest): ContentIdRequest.AsObject;
  static serializeBinaryToWriter(message: ContentIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentIdRequest;
  static deserializeBinaryFromReader(message: ContentIdRequest, reader: jspb.BinaryReader): ContentIdRequest;
}

export namespace ContentIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class ContentIdAndUserIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ContentIdAndUserIdRequest;

  getUserId(): number;
  setUserId(value: number): ContentIdAndUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentIdAndUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContentIdAndUserIdRequest): ContentIdAndUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ContentIdAndUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentIdAndUserIdRequest;
  static deserializeBinaryFromReader(message: ContentIdAndUserIdRequest, reader: jspb.BinaryReader): ContentIdAndUserIdRequest;
}

export namespace ContentIdAndUserIdRequest {
  export type AsObject = {
    id: number,
    userId: number,
  }
}

export class ContentUuidRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ContentUuidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentUuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContentUuidRequest): ContentUuidRequest.AsObject;
  static serializeBinaryToWriter(message: ContentUuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentUuidRequest;
  static deserializeBinaryFromReader(message: ContentUuidRequest, reader: jspb.BinaryReader): ContentUuidRequest;
}

export namespace ContentUuidRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class ContentUuidAndUserIdRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ContentUuidAndUserIdRequest;

  getUserId(): number;
  setUserId(value: number): ContentUuidAndUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentUuidAndUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContentUuidAndUserIdRequest): ContentUuidAndUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ContentUuidAndUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentUuidAndUserIdRequest;
  static deserializeBinaryFromReader(message: ContentUuidAndUserIdRequest, reader: jspb.BinaryReader): ContentUuidAndUserIdRequest;
}

export namespace ContentUuidAndUserIdRequest {
  export type AsObject = {
    uuid: string,
    userId: number,
  }
}

export class ContentIdListRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): ContentIdListRequest;
  clearIdList(): ContentIdListRequest;
  addId(value: number, index?: number): ContentIdListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentIdListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContentIdListRequest): ContentIdListRequest.AsObject;
  static serializeBinaryToWriter(message: ContentIdListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentIdListRequest;
  static deserializeBinaryFromReader(message: ContentIdListRequest, reader: jspb.BinaryReader): ContentIdListRequest;
}

export namespace ContentIdListRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class ContentUserIdRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ContentUserIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContentUserIdRequest): ContentUserIdRequest.AsObject;
  static serializeBinaryToWriter(message: ContentUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentUserIdRequest;
  static deserializeBinaryFromReader(message: ContentUserIdRequest, reader: jspb.BinaryReader): ContentUserIdRequest;
}

export namespace ContentUserIdRequest {
  export type AsObject = {
    userId: number,
  }
}

export class ContentBoolResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): ContentBoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentBoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContentBoolResponse): ContentBoolResponse.AsObject;
  static serializeBinaryToWriter(message: ContentBoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentBoolResponse;
  static deserializeBinaryFromReader(message: ContentBoolResponse, reader: jspb.BinaryReader): ContentBoolResponse;
}

export namespace ContentBoolResponse {
  export type AsObject = {
    error: boolean,
  }
}

export class ContentSearchRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ContentSearchRequest;

  getKeyword(): string;
  setKeyword(value: string): ContentSearchRequest;

  getToolList(): Array<ContentTool.Tool>;
  setToolList(value: Array<ContentTool.Tool>): ContentSearchRequest;
  clearToolList(): ContentSearchRequest;
  addTool(value: ContentTool.Tool, index?: number): ContentSearchRequest;

  getCategoryList(): Array<ContentCategory.Category>;
  setCategoryList(value: Array<ContentCategory.Category>): ContentSearchRequest;
  clearCategoryList(): ContentSearchRequest;
  addCategory(value: ContentCategory.Category, index?: number): ContentSearchRequest;

  getSubCategoryList(): Array<ContentSubCategory.SubCategory>;
  setSubCategoryList(value: Array<ContentSubCategory.SubCategory>): ContentSearchRequest;
  clearSubCategoryList(): ContentSearchRequest;
  addSubCategory(value: ContentSubCategory.SubCategory, index?: number): ContentSearchRequest;

  getSortBy(): ContentSearchRequest.SortBy;
  setSortBy(value: ContentSearchRequest.SortBy): ContentSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContentSearchRequest): ContentSearchRequest.AsObject;
  static serializeBinaryToWriter(message: ContentSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentSearchRequest;
  static deserializeBinaryFromReader(message: ContentSearchRequest, reader: jspb.BinaryReader): ContentSearchRequest;
}

export namespace ContentSearchRequest {
  export type AsObject = {
    userId: number,
    keyword: string,
    toolList: Array<ContentTool.Tool>,
    categoryList: Array<ContentCategory.Category>,
    subCategoryList: Array<ContentSubCategory.SubCategory>,
    sortBy: ContentSearchRequest.SortBy,
  }

  export enum SortBy { 
    NEWEST = 0,
    HOTTEST = 1,
    TOP = 2,
    RECCOMEND = 3,
  }
}

