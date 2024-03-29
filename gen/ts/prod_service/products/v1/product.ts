// @generated by protobuf-ts 2.2.2 with parameter long_type_string
// @generated from protobuf file "prod_service/products/v1/product.proto" (package "prod_service.products.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message prod_service.products.v1.Product
 */
export interface Product {
    /**
     * Identifier
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Name
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * Description
     *
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * Image ID
     *
     * @generated from protobuf field: optional string image_id = 4;
     */
    imageId?: string;
    /**
     * Price
     *
     * @generated from protobuf field: string price = 5;
     */
    price: string;
    /**
     * Prince Currency
     *
     * @generated from protobuf field: uint32 currency_id = 6;
     */
    currencyId: number;
    /**
     * Rating
     *
     * @generated from protobuf field: uint32 rating = 7;
     */
    rating: number;
    /**
     * Category ID
     *
     * @generated from protobuf field: uint32 category_id = 8;
     */
    categoryId: number;
    /**
     * Specification
     *
     * @generated from protobuf field: string specification = 9;
     */
    specification: string;
    /**
     * Updated at
     *
     * @generated from protobuf field: optional int64 updated_at = 10;
     */
    updatedAt?: string;
    /**
     * Create at
     *
     * @generated from protobuf field: int64 created_at = 11;
     */
    createdAt: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Product$Type extends MessageType<Product> {
    constructor() {
        super("prod_service.products.v1.Product", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "image_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "price", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "currency_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "rating", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "category_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "specification", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "updated_at", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 11, name: "created_at", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value?: PartialMessage<Product>): Product {
        const message = { id: "", name: "", description: "", price: "", currencyId: 0, rating: 0, categoryId: 0, specification: "", createdAt: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Product>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Product): Product {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* string description */ 3:
                    message.description = reader.string();
                    break;
                case /* optional string image_id */ 4:
                    message.imageId = reader.string();
                    break;
                case /* string price */ 5:
                    message.price = reader.string();
                    break;
                case /* uint32 currency_id */ 6:
                    message.currencyId = reader.uint32();
                    break;
                case /* uint32 rating */ 7:
                    message.rating = reader.uint32();
                    break;
                case /* uint32 category_id */ 8:
                    message.categoryId = reader.uint32();
                    break;
                case /* string specification */ 9:
                    message.specification = reader.string();
                    break;
                case /* optional int64 updated_at */ 10:
                    message.updatedAt = reader.int64().toString();
                    break;
                case /* int64 created_at */ 11:
                    message.createdAt = reader.int64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Product, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* string description = 3; */
        if (message.description !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.description);
        /* optional string image_id = 4; */
        if (message.imageId !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.imageId);
        /* string price = 5; */
        if (message.price !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.price);
        /* uint32 currency_id = 6; */
        if (message.currencyId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.currencyId);
        /* uint32 rating = 7; */
        if (message.rating !== 0)
            writer.tag(7, WireType.Varint).uint32(message.rating);
        /* uint32 category_id = 8; */
        if (message.categoryId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.categoryId);
        /* string specification = 9; */
        if (message.specification !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.specification);
        /* optional int64 updated_at = 10; */
        if (message.updatedAt !== undefined)
            writer.tag(10, WireType.Varint).int64(message.updatedAt);
        /* int64 created_at = 11; */
        if (message.createdAt !== "0")
            writer.tag(11, WireType.Varint).int64(message.createdAt);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message prod_service.products.v1.Product
 */
export const Product = new Product$Type();
