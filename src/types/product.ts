export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  original_price?: number;
  category: string;
  image_url: string;
  rating: number;
  stock: number;
  created_at?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

