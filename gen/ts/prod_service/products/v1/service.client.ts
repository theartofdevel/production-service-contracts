// @generated by protobuf-ts 2.2.2 with parameter long_type_string
// @generated from protobuf file "prod_service/products/v1/service.proto" (package "prod_service.products.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ProductService } from "./service";
import type { DeleteProductResponse } from "./service";
import type { DeleteProductRequest } from "./service";
import type { UpdateProductResponse } from "./service";
import type { UpdateProductRequest } from "./service";
import type { CreateProductResponse } from "./service";
import type { CreateProductRequest } from "./service";
import type { ProductByIDResponse } from "./service";
import type { ProductByIDRequest } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { AllProductsResponse } from "./service";
import type { AllProductsRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service prod_service.products.v1.ProductService
 */
export interface IProductServiceClient {
    /**
     * @generated from protobuf rpc: AllProducts(prod_service.products.v1.AllProductsRequest) returns (prod_service.products.v1.AllProductsResponse);
     */
    allProducts(input: AllProductsRequest, options?: RpcOptions): UnaryCall<AllProductsRequest, AllProductsResponse>;
    /**
     * @generated from protobuf rpc: ProductByID(prod_service.products.v1.ProductByIDRequest) returns (prod_service.products.v1.ProductByIDResponse);
     */
    productByID(input: ProductByIDRequest, options?: RpcOptions): UnaryCall<ProductByIDRequest, ProductByIDResponse>;
    /**
     * @generated from protobuf rpc: CreateProduct(prod_service.products.v1.CreateProductRequest) returns (prod_service.products.v1.CreateProductResponse);
     */
    createProduct(input: CreateProductRequest, options?: RpcOptions): UnaryCall<CreateProductRequest, CreateProductResponse>;
    /**
     * @generated from protobuf rpc: UpdateProduct(prod_service.products.v1.UpdateProductRequest) returns (prod_service.products.v1.UpdateProductResponse);
     */
    updateProduct(input: UpdateProductRequest, options?: RpcOptions): UnaryCall<UpdateProductRequest, UpdateProductResponse>;
    /**
     * @generated from protobuf rpc: DeleteProduct(prod_service.products.v1.DeleteProductRequest) returns (prod_service.products.v1.DeleteProductResponse);
     */
    deleteProduct(input: DeleteProductRequest, options?: RpcOptions): UnaryCall<DeleteProductRequest, DeleteProductResponse>;
}
/**
 * @generated from protobuf service prod_service.products.v1.ProductService
 */
export class ProductServiceClient implements IProductServiceClient, ServiceInfo {
    typeName = ProductService.typeName;
    methods = ProductService.methods;
    options = ProductService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: AllProducts(prod_service.products.v1.AllProductsRequest) returns (prod_service.products.v1.AllProductsResponse);
     */
    allProducts(input: AllProductsRequest, options?: RpcOptions): UnaryCall<AllProductsRequest, AllProductsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<AllProductsRequest, AllProductsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ProductByID(prod_service.products.v1.ProductByIDRequest) returns (prod_service.products.v1.ProductByIDResponse);
     */
    productByID(input: ProductByIDRequest, options?: RpcOptions): UnaryCall<ProductByIDRequest, ProductByIDResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ProductByIDRequest, ProductByIDResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateProduct(prod_service.products.v1.CreateProductRequest) returns (prod_service.products.v1.CreateProductResponse);
     */
    createProduct(input: CreateProductRequest, options?: RpcOptions): UnaryCall<CreateProductRequest, CreateProductResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateProductRequest, CreateProductResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdateProduct(prod_service.products.v1.UpdateProductRequest) returns (prod_service.products.v1.UpdateProductResponse);
     */
    updateProduct(input: UpdateProductRequest, options?: RpcOptions): UnaryCall<UpdateProductRequest, UpdateProductResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateProductRequest, UpdateProductResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteProduct(prod_service.products.v1.DeleteProductRequest) returns (prod_service.products.v1.DeleteProductResponse);
     */
    deleteProduct(input: DeleteProductRequest, options?: RpcOptions): UnaryCall<DeleteProductRequest, DeleteProductResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteProductRequest, DeleteProductResponse>("unary", this._transport, method, opt, input);
    }
}
