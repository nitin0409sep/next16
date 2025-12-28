import { books } from "../../db";

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const bookId = Number(id);

    if (Number.isNaN(bookId)) {
        return new Response("Invalid book id", { status: 400 });
    }

    const book = books.find((b) => b.id === bookId);

    if (!book) {
        return new Response("Book not found", { status: 404 });
    }

    return Response.json(book);
}
