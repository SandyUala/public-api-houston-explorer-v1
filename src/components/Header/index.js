import React, { Component } from 'react';
import s from './index.module.scss';

import APISelector from '../APISelector';

export default class Header extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.header}>
                    <img src="/img/satellite.png" className={s.logo} />
                    <h4>
                        Houston - Ground Control
                    </h4>
                    <h2>
                        Welcome to the interactive explorer console for the Astronomer Public GraphQL API
                    </h2>

                    <APISelector />
                </div>
            </div>
        )
    }
}