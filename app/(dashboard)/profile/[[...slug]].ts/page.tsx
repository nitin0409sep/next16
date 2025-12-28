// app/profile/[[...slug]]/page.tsx
import { Suspense } from "react";
import ProfileContent from "./ProfileContent";

export default function ProfilePage({
    params,
}: {
    params: Promise<{ slug?: string[] }>;
}) {
    return (
        <Suspense fallback={<p>Loading profile...</p>}>
            <ProfileContent params={params} />
        </Suspense>
    );
}
