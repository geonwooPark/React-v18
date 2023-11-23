import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'

const wait = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

type Album = {
  userId: number
  id: number
  title: string
}

const fetchAlbums = async () => {
  const result = await axios
    .get<Album[]>('http://jsonplaceholder.typicode.com/albums')
    .then(await wait(3000))
  return result.data
}

export default function AlbumList() {
  const { data } = useSuspenseQuery<Album[]>({
    queryKey: ['albums'],
    queryFn: fetchAlbums,
  })

  return (
    <div className="h-[300px] border-2 bg-pink-200 text-center overflow-y-scroll">
      <h2 className="text-2xl font-bold">AlbunList</h2>
      {data?.map((album) => <p key={album.id}>{album.title}</p>)}
    </div>
  )
}
