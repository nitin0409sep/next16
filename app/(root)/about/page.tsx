import { unstable_cache } from 'next/cache';

type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const fetchPosts = unstable_cache(
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            next: { revalidate: 60 }, // Revalidate after 60s
        });
        return res.json();
    },
    ['user-data'], // cache key
    { revalidate: 60 } // optional, can also revalidate manually
);

const About = async () => {
    const postsData: TPost[] = await fetchPosts();

    return (
        <div className="flex flex-col gap-3">
            <h1>User Posts</h1>

            {postsData.map((post: TPost) => {
                return (
                    <div key={post.id}>
                        <h1>id - {post.id}</h1>
                        <h1>userId - {post.userId}</h1>
                        <h1>title - {post.title}</h1>
                        <h1>body - {post.body}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default About;
