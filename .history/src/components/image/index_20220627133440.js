import { forwardRef } from 'react'
import images from '~/images'

console.log(images.noImage);

function Image({ ...props }, ref) {
    return (
        <img ref={ref} {...props} />
    );
}

export default forwardRef(Image);