// Nha Cung Cap
export interface Supplier {
  id: string;
  code: string;
  name: string;
  phone: string;
  address: string;
  email: string;
}

// SanPham

export interface Product {
  id: string;
  name: string;
  title: string;
  price: number;
  quantity: number;
  status: number;
  description: string;
  receipt: Receipt;
  images: ImageTypes[];
}

// Phieu nhap

export interface Receipt {
  id: string;
  receiptCode: string;
  receiptName: string;
  importDate: Date;
  expirationDate: Date;
  productionDate: Date;
  quantity: number;
  total: number;
  supplier: Supplier;
}

// Danh Muc

export interface Category {
  id: string;
  name: string;
  status: number;
}

export interface CategoryDetails {
  id: string;
}

export interface ImageTypes {
  id: string;
  imageUrl: string;
}

export interface Promotion {
  id: string;
  name: string;
  promotionValue: number;
  startDate: Date;
  endDate: Date;
  status: number;
}

// Chi Tiet Khuyen Mai
export interface PromotionDetails {
  id: string;
  promotion: Promotion;
  product: Product;
}

// Lo San Pham
export interface ProductBatch {
  id: string;
}

// Chi Tiet Lo San Pham
export interface ProductBatchDetails {
  id: string;
  productBatch: ProductBatch;
  product: Product;
}

enum Gender {
  NAM = "NAM",
  NU = "NU",
  KHAC = "KHAC",
}

// KhachHang
export interface Customer {
  id: string;
  name: string;
  fullName: string;
  birthDay: Date;
  age: number;
  gender: Gender;
  account: Account;
  status: number;
}

enum AccountType {
  FACEBOOK = "FACEBOOK",
  GOOOGLE = "GOOOGLE",
}

export interface Account {
  id: string;
  username: string;
  password: string;
  accountType: AccountType;
}

export interface Address {
  id: string;
  // huyen
  district: string;
  // xa ỏr lang
  commune: string;
  // tinh
  region: string;
  // dia chi
  address: string;
  status: number;
  customer: Customer;
}
