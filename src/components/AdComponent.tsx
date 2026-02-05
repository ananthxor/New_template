import React from 'react';
import './AdComponent.css';

export type AdFormat = 'banner' | 'rectangle' | 'sidebar' | 'in-feed';

interface AdComponentProps {
    format: AdFormat;
    className?: string;
}

const AdComponent: React.FC<AdComponentProps> = ({ format, className = '' }) => {
    const getAdDimensions = () => {
        switch (format) {
            case 'banner':
                return { width: '728px', height: '90px', label: 'Leaderboard Ad (728x90)' };
            case 'rectangle':
                return { width: '300px', height: '250px', label: 'Medium Rectangle (300x250)' };
            case 'sidebar':
                return { width: '100%', height: '600px', label: 'Half Page Ad (300x600)' };
            case 'in-feed':
                return { width: '100%', height: '120px', label: 'In-Feed Native Ad' };
            default:
                return { width: '100%', height: 'auto', label: 'Advertisement' };
        }
    };

    const adInfo = getAdDimensions();

    return (
        <div className={`ad-container ad-${format} ${className}`}>
            <span className="ad-label">Advertisement</span>
            <div className="ad-content" style={{ minHeight: adInfo.height }}>
                <p className="ad-dimensions">{adInfo.label}</p>
                <p className="ad-placeholder-text">Place your ad code here</p>
            </div>
        </div>
    );
};

export default AdComponent;
