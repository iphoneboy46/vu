import { forwardRef } from 'react'

function Image({ ...props }) {
    return (
        <img ref={ref} {...props} />
    );
}

export default forwardRef(Image);