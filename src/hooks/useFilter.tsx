import React, { useEffect, useState } from 'react';

type JobFilter = "Security" | "Ticketing" | "Cleaning" | "Vendor" | undefined
export function useFilter(){
    const [jobFilter, setFilter] = useState<JobFilter>()
    console.log(jobFilter)

    function handleSetFilter(filter: JobFilter){
        setFilter(filter)
    }

    return {
        jobFilter,
        setJobFilter: handleSetFilter
    }
}