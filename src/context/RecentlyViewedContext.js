import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RecentlyViewedContext = createContext();

export const useRecentlyViewed = () => {
    const context = useContext(RecentlyViewedContext);
    if (!context) {
        throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
    }
    return context;
};

export const RecentlyViewedProvider = ({ children }) => {
    const [viewedIds, setViewedIds] = useState(() => {
        const stored = localStorage.getItem('recentlyViewedIds');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('recentlyViewedIds', JSON.stringify(viewedIds));
    }, [viewedIds]);

    const addViewedProduct = useCallback((id) => {
        setViewedIds(prev => {
            const filtered = prev.filter(viewedId => viewedId !== id);
            return [id, ...filtered].slice(0, 4);
        });
    }, []);

    const value = {
        viewedIds,
        addViewedProduct,
    };

    return (
        <RecentlyViewedContext.Provider value={value}>
            {children}
        </RecentlyViewedContext.Provider>
    );
};
