export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    category: string;
    imageUrl: string;
    author: string;
    date: string;
    readTime: string;
    isBreaking?: boolean;
}
