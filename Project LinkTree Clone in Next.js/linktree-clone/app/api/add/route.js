import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request) {
    const body = await request.json()
    const handle = body?.handle?.toString().trim()

    if (!handle) {
        return NextResponse.json(
            {
                success: false,
                error: true,
                message: 'Handle is required',
                result: null,
            },
            { status: 400 }
        )
    }

    const client = await clientPromise
    const db = client.db('bittree')
    const collection = db.collection('links')

    const doc = await collection.findOne({ handle })
    if (doc) {
        return NextResponse.json(
            {
                success: false,
                error: true,
                message: 'This Bittree already exists!',
                result: null,
            },
            { status: 409 }
        )
    }

    const result = await collection.insertOne({ ...body, handle })
    return NextResponse.json(
        {
            success: true,
            error: false,
            message: 'Your Bittree has been generated!',
            result,
        },
        { status: 201 }
    )
}
