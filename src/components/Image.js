import React, {useState} from 'react'
import noImg from 'img/noimage.png'

const Image = ({src, alt, ...attr}) => {
    const [img,setImg] = useState(1)

    if (src) {
        import(`img/${src}`).then((image) => setImg(image.default))
    }

    return (
        <img src={(img) ? img : noImg} alt={alt} {...attr} />
    )
}

export default Image