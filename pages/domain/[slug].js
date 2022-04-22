import ResearchTopic from "../../components/Dynamic_Pages/ResearchTopic"

export async function getServerSideProps({ params: { slug } }) {
    // main for single page
    const res = await fetch(`https://repo.wrirk.com/api/topic/${slug}`)
    const post = await res.json()

    // Pass post data to the page via props
    return {
        props: {
            post: post,
        }
    }
}

export async function getServerSidePaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://repo.wrirk.com/api/topics')
    const posts = await res.json()

    const paths = posts.topics.map((service) => ({
        params: {
            slug: service.slug,
        },
    }))
    return { paths, fallback: false }
}

function TopicSlug({ post }) {

    return (
        <>
            <ResearchTopic post={post} />
        </>
    )
}

export default TopicSlug



