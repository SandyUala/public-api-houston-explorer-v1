import React, { Component } from 'react';
import s from './index.module.scss';

import classNames from 'classnames';

export default class Header extends Component {
    render() {
        const { name } = this.props;
        return (
            <input type={name === 'password' ? 'password' : 'text'} name={name} placeholder={name} />
        )
    }
}