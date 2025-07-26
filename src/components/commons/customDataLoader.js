import React from "react";

const CustomDataLoader = ({ status, error, children, renderLoading, renderError }) => {
    if (status === 'loading') return renderLoading?.() || <div>Loading...</div>;
    if (status === 'failed') return renderError?.(error) || <div>Error: {error}</div>;
    return <>{children}</>;
}

export default CustomDataLoader;