import { forwardRef } from 'react'

const Image = forwardRef(function ({ ...props }) {
    return (
        <img {...props} />
    );
})

export default Image;