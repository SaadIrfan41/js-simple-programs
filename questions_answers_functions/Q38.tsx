import React from 'react'
const make_album = (
  artist_name: string,
  album_title: string,
  tracks_count: number
) => {
  const album = {
    artist: artist_name,
    title: album_title,
    tracks: tracks_count,
  }
  return Object.values(album)
}

const Q38 = () => {
  return (
    <div>
      {make_album('metallica', 'ride the lightning', 5)}
      <br />
      {make_album('beethoven', 'ninth symphony', 6)}
      <br />
      {make_album('willie nelson', 'red-headed stranger', 8)}

      {/* <h1> {make_album('Islamabad', 'Pakistan')}</h1>

      <h1>{make_album('Mumbai', 'India')}</h1> */}
    </div>
  )
}

export default Q38
