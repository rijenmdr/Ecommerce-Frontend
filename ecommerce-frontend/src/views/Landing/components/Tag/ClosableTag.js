import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

//image
import Close from '../../../../assets/images/icons/ic-actions-close-simple.svg'

const ClosableTag = ({tag, list, setList}) => {

    const removeTag = () => {
        setList(list=>list.filter(l=>l !== tag))
    }

    return (
        <div className={`product-tag d-flex align-item-center`}>
           <h6 className={'text-secondary mr-sm'}>{tag}</h6> 
           <Image onClick={removeTag} className='cursor-pointer' src={Close} width={15}/>
        </div>
    )
}

ClosableTag.propTypes = {
    tag:PropTypes.string.isRequired
}

export default ClosableTag
