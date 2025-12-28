import { cookies } from "next/headers";

// app/profile/[[...slug]]/ProfileContent.tsx
export default async function ProfileContent({ params }: { params: Promise<{ slug?: string[] }> }) {
    // cookies();
    const { slug } = await params;

    console.log({ slug });

    return (
        <div>
            <h1>User Profile</h1>
            <p>Slug: {slug?.length ? slug.join(" / ") : "root profile"}</p>
        </div>
    );
}
