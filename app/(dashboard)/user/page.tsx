import { cacheTag, revalidateTag } from "next/cache";

type TPost = {
    userId: string | number;
    id: number | string;
    title: string;
    body: string;
};

export default async function User() {
    'use cache'
    cacheTag('user-data');
    const data = await fetch("http://localhost:3000/api/books");
    console.log(data);
    const postsData = await data.json();

    console.log({ postsData: postsData[0] });
    return (
        <div className="flex flex-col gap-3">
            <h1>User Posts</h1>

            {postsData.books.map((post: TPost) => {
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
}

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// type TPost = {
//     userId: string | number;
//     id: number | string;
//     title: string;
//     body: string;
// };

// const User = () => {
//     const [postsData, setPostsData] = useState<TPost[] | []>([]);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const res = await data.json();
//             setPostsData(() => res);
//         };

//         fetchPosts();
//         return () => { };
//     });

//     return (
//         <div className="flex flex-col gap-3">
//             <h1>User Posts</h1>

//             {postsData.map((post) => {
//                 return <div key={post.id}>
//                     <h1>id - {post.id}</h1>
//                     <h1>userId - {post.userId}</h1>
//                     <h1>title - {post.title}</h1>
//                     <h1>body - {post.body}</h1>

//                 </div>;
//             })}

//             <br />
//             <Link href={"/user/1"}>User 1</Link>
//             <br />
//             <Link href={"/user/2"}>User 2</Link>
//         </div>
//     );
// };

// export default User;
