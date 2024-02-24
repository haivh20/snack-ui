// KhachHang
export interface KhachHang {
  idkh: string;
  tenKhachHang: string;
  gioiTinh: string;
  trangThai: number;
  dob: Date;
  age: number;
  diaChis: DiaChi[];
}

export interface DiaChi {
  id: string;
  // huyen
  xa: string;
  // xa ỏr lang
  huyen: string;
  // tinh
  tinh: string;
  // dia chi
  soNha: string;
  diaChi: string;
  trangThai: number;
  khachHang: KhachHang;
}
