import React from 'react'
import { useGetDashboardMetricsQuery } from '@/state/api';

type Props = {}

const PurchaseSummaryCard = (props: Props) => {
    const { data, isLoading, isError } = useGetDashboardMetricsQuery();
    const purchaseData = data?.purchaseSummary || [];
    return (
        <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
            PurchaseSummaryCard
        </div>
    )
}

export default PurchaseSummaryCard