import { useState, forwardRef } from 'react'
import images from '~/Images'



function Image({ src, alt, fallback, ...props }, ref) {
    const [_fallback, setFallback] = useState('')

    const handleError = function () {
        setFallback(images.noImage)
    }

    return (
        <img ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleError} />
    );
}

export default forwardRef(Image);