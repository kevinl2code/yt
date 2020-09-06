import { useEffect, useState} from 'react'
import youtube from '../api/youtube'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async (term) => {
        const KEY = 'AIzaSyDGj7rieVs_aA-CVKxMZJJzID28-89gtKU'
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        })

        setVideos(response.data.items)
        
    }

    return [ videos, search ]
}

export default useVideos