import { forwardRef } from 'react'
import images from '~/Images'



function Image({ src, alt, ...props }, ref) {
    return (
        <img ref={ref} src={src} alt={alt}{...props} />
    );
}

export default forwardRef(Image);