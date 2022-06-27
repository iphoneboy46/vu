import { forwardRef } from 'react'
import images from '~/Images'

console.log(images.noImage);

function Image({ ...props }, ref) {
    return (
        <img ref={ref} {...props} />
    );
}

export default forwardRef(Image);