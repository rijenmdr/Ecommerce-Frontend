import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

//image
import Close from '../../../../assets/images/icons/ic-actions-close-simple.svg'

const ClosableTag = ({ tag, removeTag }) => {

    return (
        <div className={`product-tag d-flex align-item-center`}>
            <h6 className={'text-secondary mr-sm'}>{tag}</h6>
            <Image onClick={() => removeTag(tag)} className='cursor-pointer' src={Close} width={15} />
        </div>
    )
}

ClosableTag.propTypes = {
    tag: PropTypes.string.isRequired,
    removeTag: PropTypes.func.isRequired
}

export default ClosableTag
