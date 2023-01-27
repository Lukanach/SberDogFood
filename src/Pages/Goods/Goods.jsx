/* eslint-disable */

import { useQuery } from "@tanstack/react-query"
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../contexts/AppContextProvider"
import { Loader } from "../../components/Loader/Loader"
import { GoodsItem } from "../GoodsItem/GoodsItem"
import goodsStyles from "./goods.module.css"

export const Goods = () => {
  const { token } = useContext(AppContext)
  const navigate = useNavigate()
  console.log( {token})

  useEffect(() => {
    if (!token) {
      navigate("/signin")
    }
  }, [token])

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["productsfetch"],
    queryFn: () =>
      fetch("https://api.react-learning.ru/products", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.status > 299) {
          throw new Error(
            `Ошибка при получении списка продуктов. Status: ${res.status}`
          )
        }

        return res.json()
      }),
    enabled: token !== undefined,
  })

  if (isError)
    return (
      <div className={goodsStyles.errorMessage}>
        <p>{error.message}</p>
        <button onClick={refetch} type="button">
          Повторить запрос
        </button>
      </div>
    )

  if (isLoading) return <Loader />
  if (!data.products.length) return <p>Ошибка</p>

  return (
    <ul className={goodsStyles.productsList}>
      {data.products.map((product, index) => (
        <GoodsItem product={product} key={index} />
      ))}
    </ul>
  )
}