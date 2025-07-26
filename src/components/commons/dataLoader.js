// import React from "react";

const DataLoader = ({ status, error, children }) => {
    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;
    return <>{children}</>; // khi status là 'succeeded'
}

export default DataLoader;