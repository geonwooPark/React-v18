import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

type Album = {
  userId: number
  id: number
  title: string
}

const fetchAlbums = async () => {
  const result = await axios.get<Album[]>(
    'http://jsonplaceholder.typicode.com/albums',
  )
  return result.data
}

export default function ReactQuery() {
  const { isPending, error, data } = useQuery<Album[]>({
    queryKey: ['albums'],
    queryFn: fetchAlbums,
  })

  if (error) return <p>에러입니다!</p>
  if (isPending) return <p>로딩중...</p>
  return (
    <div>
      <p>React Query</p>
      {data?.map((album) => <p key={album.id}>{album.title}</p>)}
    </div>
  )
}
