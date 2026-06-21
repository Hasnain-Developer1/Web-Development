import { notFound } from 'next/navigation'

export default async function Page({ params }) {
    const { slug } = await params
    // Fetch your blog by its slug
    let languages = ["python", "javascript", "java", "cpp", "cs", "ruby", "php", "go", "typescript", "swift"]
    if (languages.includes(slug)) {
        return <div>My Blog Post: {slug}</div>
    }
    else
        notFound()

    return (
        <div>Blog post with slug: {slug}</div>
    )
}