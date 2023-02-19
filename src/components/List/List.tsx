import { ReactNode } from "react"

interface ListProps<T> {
    items: T[],
    renderItem: (item: T) => ReactNode,
    limit?: number,
    startWith?: number,
}

export default function List<T>({items, renderItem, limit, startWith}: ListProps<T>) {
  const numberLimitRender = !!limit ? limit : items.length
  const numberStartWithRender = !!startWith ? startWith : 0

  return (
    <>
        {
            items.slice(numberStartWithRender, numberLimitRender).map(renderItem)
        }
    </>
  )
}