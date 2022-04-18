import React from 'react';

export function SetTitle(title: string) {
    React.useEffect(() => {
        document.title = title;
    }, [ title ]);
};