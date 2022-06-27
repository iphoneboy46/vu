import { useState, forwardRef } from 'react'
import images from '~/Images'



function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('')

    return (
        <img ref={ref} src={src} alt={alt} {...props} />
    );
}

export default forwardRef(Image);