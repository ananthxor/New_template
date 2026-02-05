import React from 'react';
import { Clock, User } from 'lucide-react';
import type { NewsItem } from '../types';
import './NewsCard.css';

interface NewsCardProps {
    news: NewsItem;
    featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
    return (
        <div className={`news-card ${featured ? 'news-card-featured' : ''}`}>
            <div className="news-card-image-wrapper">
                <img src={news.imageUrl} alt={news.title} className="news-card-image" loading="lazy" />
                <span className="news-card-category">{news.category}</span>
                {news.isBreaking && <span className="news-card-breaking">Breaking</span>}
            </div>
            <div className="news-card-content">
                <div className="news-card-meta">
                    <span className="meta-item">
                        <User size={14} /> {news.author}
                    </span>
                    <span className="meta-item">
                        <Clock size={14} /> {news.readTime}
                    </span>
                </div>
                <h3 className="news-card-title">
                    <a href={`/news/${news.id}`}>{news.title}</a>
                </h3>
                <p className="news-card-summary">{news.summary}</p>
                <span className="news-card-date">{news.date}</span>
            </div>
        </div>
    );
};

export default NewsCard;
