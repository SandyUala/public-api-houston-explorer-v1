import React, { Component } from 'react';
import s from './index.module.scss';

import classNames from 'classnames';

import TextField from '../TextField';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { active: 1 };
    }

    generateProps = i => ({ className: classNames({ [s.active]: this.state.active === i }), onClick: (t) => this.setState({ active: i }) })

    render() {
        return (
            <div className={s.wrapper}>
                <div>
                    <button { ...(this.generateProps(0)) }>Local</button>
                    <button { ...(this.generateProps(1)) }>Staging</button>
                    <button { ...(this.generateProps(2)) }>Prod</button>
                    <button { ...(this.generateProps(3)) }>Pro</button>
                </div>

                <div className={s.fields}>
                    <TextField name="username" />
                    <TextField name="password" />
                </div>
            </div>
        )
    }
}