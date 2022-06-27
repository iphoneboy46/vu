import { useState, forwardRef } from 'react'
import images from '~/Images'



function Image({ src, alt, fallback, ...props }, ref) {
    const [fallback, setFallback] = useState('')

    const handleError = function () {
        setFallback(images.noImage)
    }

    return (
        <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />
    );
}

export default forwardRef(Image);