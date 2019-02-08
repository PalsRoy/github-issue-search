import React from 'react';
import './styles.css';

const AddFailure = ({stylingProperty}) => (
<div className={stylingProperty}>
Failed to fetch issues details from GitHub!
</div>
);

export default AddFailure;
