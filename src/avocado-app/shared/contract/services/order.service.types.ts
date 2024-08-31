import { Order, OrderDocument } from "../types";

export interface UpdateOrderIn extends Partial<Order> {
  id: number;
}

export interface UpdateDocumentIn extends Partial<OrderDocument> {
  id: string;
}

export interface UpdateOrderOut {
  error?: UpdateOrderError;
}

export interface UpdateDocumentOut {
  error?: UpdateDocumentError;
}

export interface UpdateOrderError {
  message: string;
  statusCode: number;
}

export interface UpdateDocumentError {
  message: string;
  statusCode: number;
}
