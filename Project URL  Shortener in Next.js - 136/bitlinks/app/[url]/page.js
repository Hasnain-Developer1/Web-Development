import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const { url: shorturl } = await params

    const client = await clientPromise
    const db = client.db('bitlinks')
    const collection = db.collection('url')

    const doc = await collection.findOne({ shorturl })

    if (doc) {
        redirect(doc.url)
    }

    redirect(process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000')
}