import React from 'react';
import Header2 from '../headers/header2';
import Footer from '../footers/footer';
// import PropTypes from 'prop-types';

// index.propTypes = {

// };

function BaseLayout({ children }) {
    return (
        <div>
            <Header2 />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default BaseLayout;