// app/profile/[[...slug]]/page.tsx
import { Suspense } from "react";
import ProfileContent from "./ProfileContent";
import { cookies } from "next/headers";

export default function ProfilePage({ params }: { params: Promise<{ slug?: string[] }> }) {
    // cookies();
    return (
        <Suspense fallback={<p>Loading profile...</p>}>
            <ProfileContent params={params} />
        </Suspense>
    );
}
