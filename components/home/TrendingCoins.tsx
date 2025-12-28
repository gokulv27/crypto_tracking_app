import { fetcher } from '@/lib/coingecko.actions'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import DataTable from '@/components/DataTable'
import { TrendingUp, TrendingDown } from 'lucide-react'

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) => {
      const item = coin.item
      return (
        <Link href={`/coins/${item.id}`} className="flex items-center gap-2">
          <Image src={item.large} alt={item.name} width={36} height={36} className="rounded-full" />
          <p>{item.name}</p>
        </Link>
      )
    },
  },
  {
    header: '24h change',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item
      const isTrendingUp = (item.data?.price_change_percentage_24h?.usd ?? 0) > 0
      return (
        <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
          <p className="flex items-center gap-1">
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
            {Math.abs(item.data?.price_change_percentage_24h?.usd ?? 0).toFixed(2)}%
          </p>
        </div>
      )
    },
  },
]

const TrendingCoins = async () => {
  const trendingCoin = await fetcher<{ coins: TrendingCoin[] }>('search/trending', undefined, 300)

  return (
    <div id="trending-coins">
      <p>Trending Coin</p>
      <DataTable
        data={trendingCoin.coins.slice(0, 6) || []}
        columns={columns}
        rowKey={(coin) => coin.item.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  )
}

export default TrendingCoins
