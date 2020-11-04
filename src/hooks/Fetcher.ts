import useSWR from 'swr'
import api from '../services/api'

export default function Fetcher<Data = any, Error = any> (url: string) {
    const { data, error, mutate } = useSWR<Data, Error>(url, async (url) => {
        const response = await api.get(url)
        const data = await response.data

        return data
    }, {
        refreshInterval: 1000
    })

    return { data, error, mutate }
}