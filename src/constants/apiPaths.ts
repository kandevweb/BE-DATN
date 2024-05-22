const V1 = '/api/v1'
const V2 = '/api/v2'

const API_V1 = {
  common: `${V1}`,
  user: `${V1}/user`,
  category: `${V1}/category`,
  product: `${V1}/product`
} as const

const API_V2 = {
  example: `${V2}/example`
} as const

export { API_V1, API_V2 }
