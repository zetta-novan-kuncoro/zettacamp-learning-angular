export type Product = {
  id: number
  name: string
  price: number
  stock: number
}

export const products: Product[] = [
  { id: 1234, name: 'Indomie Goreng Original', price: 3000, stock: 200 },
  { id: 2345, name: 'Mie Sedaap Goreng Rasa Ayam Bakar Limau', price: 3000, stock: 0 }
]
