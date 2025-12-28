// import { useEffect } from "react";

const UserDetails = async ({ params }: { params: Promise<{ id: string, userId: string }> }) => {
    // Page params
    const { id, userId } = await params;



    return (
        <div>
            UserDetails
            <h1>User Details ID - {id} {userId}</h1>
        </div>
    );
};

export default UserDetails;
