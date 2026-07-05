
import clientPromise from "@/lib/mongodb"

export async function POST(request) {
   console.log(process.env.MONGODB_URI)
   try {
      const body = await request.json()
      const client = await clientPromise

      if (!client) {
         return Response.json(
            { success: false, error: true, message: 'MongoDB is not configured.' },
            { status: 500 }
         )
      }

      const db = client.db('bitlinks')
      const collection = db.collection('url')

      const existingUrl = await collection.findOne({ shorturl: body.shorturl })
      if (existingUrl) {
         return Response.json({ success: false, error: true, message: 'Short URL already exists' })
      }

      await collection.insertOne({
         url: body.url,
         shorturl: body.shorturl,
      })

      return Response.json({ success: true, error: false, message: 'URL Generated successfully' })
   } catch (error) {
      console.error('Failed to generate short URL:', error)
      return Response.json(
         { success: false, error: true, message: 'Failed to generate short URL.' },
         { status: 500 }
      )
   }
}