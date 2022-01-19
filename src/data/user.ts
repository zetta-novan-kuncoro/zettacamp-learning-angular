export type User = {
  _id: string
  name: {
    first: string
    last: string
  }
  email: string
  age: number
  gender: 'MALE' | 'FEMALE' | string
  profession: string
  maritalStatus: 'MARRIED' | 'UNMARRIED'
  location: {
    addresses: string[]
    city: string
    region: string
  }
}

export const users: User[] = [
  {
    _id: '1234567890',
    name: { first: 'Budi', last: 'Budiman' },
    email: 'clank@mail.com',
    age: 23,
    gender: 'MALE',
    profession: 'Web Developer',
    maritalStatus: 'UNMARRIED',
    location: {
      addresses: ['Jl. Kenangan KM0, Daerah RT0 RW0', 'Yogyakarta'],
      city: 'Yogyakarta',
      region: 'Indonesia'
    }
  }
]