// import { useEffect } from "react";

const UserDetails = async ({ params }: { params: Promise<{ id: string, userId: string }> }) => {
    // Page params
    const { id, userId } = await params;

    async function handleSubmit(formData: FormData) {
        'use server'
        const name = formData.get('name');
        const address = formData.get('address');

        console.log({ id, userId, name, address });
    }
    return (
        <div>
            UserDetails
            <h1>User Details ID - {id} {userId}</h1>

            <form action={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" />
                </div>

                <button type="submit">Submit</button>

            </form>

        </div>
    );
};

export default UserDetails;
