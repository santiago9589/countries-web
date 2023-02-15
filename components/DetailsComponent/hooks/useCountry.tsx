import { api } from "api/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Root } from "types/api";

export const useCountry = ():[Root]=>{
    const searchParams = useSearchParams();
    const countrySearch = searchParams.get('countrySearch');
    const [country, setCountry] = useState<Root>()

    useEffect(() => {
        api.country(countrySearch!).then((response) => {
            setCountry(response)
        })
    }, [])

    return [country!] 
}