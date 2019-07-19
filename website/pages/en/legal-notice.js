/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class LegalNotice extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <Container padding={['bottom', 'top']}>
                    <h1>Legal Notice</h1>
                    <p><strong>Legal notice in accordance with §5 TMG</strong></p>
                    <p>
                        Pablo Klaschka (priave person)<br />
                        Scheffelstraße 15a<br />
                        97072 Würzburg<br />
                        GERMANY
                    </p>
                    <h3>Contact information</h3>
                    <p>
                        E-Mail: <a href="mailto:xdplugins@pabloklaschka.de">xdplugins@pabloklaschka.de</a><br />
                        Phone: <a href="tel:+499318806945">+49 931 8806945</a>
                    </p>
                </Container>
            </div>
        );
    }
}

module.exports = LegalNotice;