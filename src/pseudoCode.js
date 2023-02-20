/* eslint-disable */
// Как может выглядеть ваш redux-store на текущий момент

export const initState = {
    user: {
      group: '',
      name: '',
      email: '',
      token: '',
    },
    cart: {
      product_id: {
        count: 5,
        isChecked: true,
      },
      product_id: {
        count: 5,
        isChecked: true,
      },
      faslkdjfalsdjf: {
        count: 1,
        isChecked: false,
      },
    },
    cart: [
      {
        id: 'faslkdjfalsdjf',
        count: 1,
        isChecked: false,
      },
    ],
  }
  
  // При открытии страницы "Корзина" нужно отправить запрос к бэку, чтобы получить объекты товаров. Сделать это
  // можно примерно так:
  
  export const Cart = () => {
  // some code here
  
    const cart = useSelector((store) => store.cart)
    const { data: products } = useQuery({ queryKey: ['cart'], queryFn: () => api.getProductsByIds(cart.map((product) => product.id)) })
  
  // some code here
  }
  
  class Api {
  // some code here
    getProductsByIds(ids) {
      return Promise.all(ids.map((id) => fetch(`https://domain.ru/products/${id}`).then((res) => res.json())))
    }
  // some code here
  }