import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { capitalize } from '../../../../helper/capitalize'

const Breadcrumbs = () => {
    const path = window.location.pathname
    const paths = path.split('/')
    return (
        <div className="breadcrumbs">

            <Breadcrumb>
                {paths && paths.map((path, index) =>
                    <>
                        {index + 1 !== paths.length ?
                            <Breadcrumb.Item href={`${index === 0 ? '' : '/' + path}`}>
                                {index === 0 ? 'Home' : capitalize(path)}
                            </Breadcrumb.Item> :
                            <Breadcrumb.Item active>
                                {capitalize(path)}
                            </Breadcrumb.Item>
                        }
                    </>
                )
                }
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs
