import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info?.snippet);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow'>
        <img className='rounded-lg' alt='Thumbnail' src={thumbnails.high.url} />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount}-views</li>
            <li></li>
        </ul>
      
    </div>
  )
}


export default VideoCard
