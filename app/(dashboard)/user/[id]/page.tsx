// import { useEffect } from "react";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    // Page params
    const { id } = await params;

    throw new Error("Failed to fetch user");
    // useEffect(() => {

    // }, [])

    return (
        <div>
            UserDetails
            <h1>User Details ID - {id}</h1>
        </div>
    );
};

export default UserDetails;
