import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { NewsItem } from '../types';
import AdComponent from './AdComponent';
import './Sidebar.css';

interface SidebarProps {
    news: NewsItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ news }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Trending Now</h3>
                <div className="sidebar-list">
                    {news.slice(0, 4).map((item, index) => (
                        <div key={item.id} className="sidebar-item">
                            <span className="sidebar-rank">{index + 1}</span>
                            <div className="sidebar-content">
                                <span className="sidebar-category">{item.category}</span>
                                <a href={`/news/${item.id}`} className="sidebar-link">
                                    {item.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AdComponent format="rectangle" />

            <div className="sidebar-section newsletter-box">
                <h3 className="sidebar-title">Subscribe</h3>
                <p className="sidebar-text">Get the latest news delivered effectively to your inbox.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Your email address" className="newsletter-input" />
                    <button type="submit" className="newsletter-btn">
                        Subscribe <ArrowRight size={16} />
                    </button>
                </form>
            </div>
        </aside>
    );
};

export default Sidebar;
