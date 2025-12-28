import React from 'react'
import { fetcher } from '@/lib/coingecko.actions'
import Image from 'next/image'
import { formatCurrency } from '@/lib/utils'
const CoinOverview = async () => {
  try {
    const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
      dex_pair_format: 'symbol',
    })

    if (!coin || !coin.image || !coin.market_data) {
      return (
        <div id="coin-overview" className="p-4 text-center text-red-400">
          Unable to load coin data
        </div>
      )
    }

    return (
      <div id="coin-overview">
        <div className="header pt-2">
          <Image src={coin.image.large} alt={coin.name} width={56} height={56} />
          <div className="info">
            <p>
              {coin.name}/{coin.symbol.toUpperCase()}
            </p>
            <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Failed to fetch coin overview:', error)
    return (
      <div id="coin-overview" className="p-4 text-center text-red-500">
        Error loading coin overview
      </div>
    )
  }
}

export default CoinOverview
