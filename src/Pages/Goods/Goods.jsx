/* eslint-disable */

import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../contexts/AppContextProvider"
import { Loader } from "../../components/Loader/Loader"
import { GoodsItem } from "../GoodsItem/GoodsItem"
import goodsStyles from "./goods.module.css"
import { useSelector } from "react-redux"

export const getTokenSelector = (state) => state.auth.token;

export const Goods = () => {
  const token = useSelector((state) => state.auth.token);
  const search = useSelector((state) => state.catalog.search);
  const navigate = useNavigate()
  

  useEffect(() => {
    if (!token) {
      navigate("/signin")
    }
  }, [token])

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["productsfetch"],
    queryFn: () =>
      
      fetch(`https://api.react-learning.ru/products/search?query=${search}`, {
          headers: {
            authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (!res.ok) {
          throw new Error(
              `Ошибка при получении списка продуктов. Status: ${res.status}`
          )
        }

        return res.json()
      }),
    enabled: token !== undefined,
  })

  useEffect(() => {
    refetch();
  }, [search]);


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
    return (
      <ul className={goodsStyles.productsList}>
        {data.map((product, index) => (
          <GoodsItem product={product} key={index} />
            ))}
    </ul>
  )
}

