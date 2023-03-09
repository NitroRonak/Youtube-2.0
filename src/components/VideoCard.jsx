import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card 
    sx={{width:{xs:"100%",sm:"358px",md:"320px"},boxShadow:"none",borderRadius:"none","&:hover":{scale:"1.1"},transition:"all 0.2s ease-in"}}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {xs:"100%",sm:"358px",md:"320px"}, height: 180}}
        >
        </CardMedia>
      </Link>
      <CardContent
        sx={{ backgroundColor: "#000", height: '106px' }}
      >
        <Link to={`/video/${videoId}`} >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`} >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
