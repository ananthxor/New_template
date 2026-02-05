import React from 'react';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import AdComponent from '../components/AdComponent';
import { dummyNews } from '../data/news';
import './Home.css';

const Home: React.FC = () => {
    const featuredNews = dummyNews[0];
    const mainNews = dummyNews.slice(1, 5); // Next 4 items
    const sidebarNews = dummyNews; // Pass all for ranking

    return (
        <div className="container home-container animate-fade-in">
            <div className="main-column">

                {/* Featured Section */}
                <section className="featured-section">
                    <h2 className="section-title">Top Stories</h2>
                    <div className="featured-grid">
                        <NewsCard news={featuredNews} featured={true} />
                    </div>
                </section>

                <AdComponent format="banner" />

                {/* Latest News Grid */}
                <section className="latest-section">
                    <h2 className="section-title">Latest News</h2>
                    <div className="news-grid">
                        {mainNews.map(news => (
                            <NewsCard key={news.id} news={news} />
                        ))}
                    </div>
                </section>

            </div>

            {/* Sidebar */}
            <div className="sidebar-column">
                <Sidebar news={sidebarNews} />
            </div>
        </div>
    );
};

export default Home;
