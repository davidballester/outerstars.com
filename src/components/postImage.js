import React from "react"

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
          filter: "grayscale(100%)",
        }}
      />
      <figcaption
        style={{
          display: "block",
          width: "100%",
          fontStyle: "italic",
          textAlign: "right",
        }}
      >
        Image by <a href={authorLink}>{authorName}</a> on{" "}
        <a href={imageSourceLink}>{imageSourceName}</a>.
      </figcaption>
    </figure>
  )
}

export default PostImage
