import React from "react"
import { text } from "@fortawesome/fontawesome-svg-core"

const PostImage = ({
  src,
  alt,
  authorName,
  authorLink,
  imageSourceName,
  imageSourceLink,
}) => {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        style={{
          marginBottom: 0,
        }}
      />
      <figcatpion
        style={{
          display: "block",
          width: "100%",
          fontStyle: "italic",
          textAlign: "right",
        }}
      >
        Image by <a href={authorLink}>{authorName}</a> on{" "}
        <a href={imageSourceLink}>{imageSourceName}</a>.
      </figcatpion>
    </figure>
  )
}

export default PostImage
