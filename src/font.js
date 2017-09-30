import React from 'react';
import classnames from 'classnames';

function Font(props) {
    const { type, className, ...nextProps } = props;
    return (<span
                {...nextProps}
                className={classnames(`icon-${type}`, className)}
            />)
}

export default Font;
