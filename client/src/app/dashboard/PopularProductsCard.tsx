import { useGetDashboardMetricsQuery } from '@/state/api'
import React from 'react'

const PopularProductsCard = () => {
    const { data: dashboardMetrics, isLoading} = useGetDashboardMetricsQuery();
    return (
    <div className="row-span-3 xl:row-span-6 bg-white shadown-md rounded-2xl pb-16">
        {isLoading ? (
            <div className="m-5"> Loading... </div>
        ): (
            <>
            <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
                Popular Products
            </h3>
            </>
        )}
    </div>
    )
}

export default PopularProductsCard