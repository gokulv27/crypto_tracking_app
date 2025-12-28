import React from 'react'
import DataTable from '@/components/DataTable'
import { DataTableColumn } from '@/components/DataTable' // Assuming this type is exported or similar

// Dummy data type for skeleton
type SkeletonItem = {
  id: string
}

const skeletonData: SkeletonItem[] = Array(6)
  .fill(null)
  .map((_, i) => ({ id: `skeleton-${i}` }))

const skeletonColumns: DataTableColumn<SkeletonItem>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: () => (
      <div className="name-link">
        <div className="name-image skeleton" />
        <div className="name-line skeleton" />
      </div>
    ),
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: () => <div className="price-line skeleton" />,
  },
  {
    header: '24h change',
    cellClassName: 'change-cell',
    cell: () => <div className="change-line skeleton" />,
  },
]

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>
      <div className="chart">
        <div className="chart-skeleton skeleton" />
      </div>
    </div>
  )
}

export const TrendingCoinsFallback = () => {
  return (
    <div id="trending-coins-fallback">
      <h4>Trending coins</h4>
      <DataTable
        data={skeletonData}
        columns={skeletonColumns}
        rowKey={(row) => row.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  )
}
