import Parser from 'rss-parser';
import {faker} from '@faker-js/faker';
import {Post} from "@/app/api/posts/post";

async function google_get() {
    try {
        const feedUrl = 'https://news.google.com/rss/search?q=apple';
        const response = await fetch(feedUrl);
        const parser = new Parser();
        const feed = await parser.parseString(await response.text());
        const articles = feed.items;
        return articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return []
    }
}

function generateRandomNews(): Post {
    const id = faker.number.int();
    const title = faker.lorem.sentence();
    const create_date = faker.date.past();
    const image = faker.image.url();
    const body = faker.lorem.paragraphs(20, '\n\n');
    const category = faker.lorem.word();

    return {
        id,
        title,
        create_date,
        image,
        body,
        category
    };
}

function getfaker(): Post[] {
    return faker.helpers.multiple(generateRandomNews, {
        count: 5,
    });
    ;
}

export async function GET(request: Request): Promise<Response> {
    const {searchParams} = new URL(request.url)

    // We sometimes artificially delay a reponse for demo purposes.
    // Don't do this in real life :)
    const delay = searchParams.get('delay')
    if (delay) {
    }

    const slug = searchParams.get('slug')
    const size = searchParams.get('size') ? parseInt(searchParams.get('size') as string) : 5

    if (slug) {
        const post = generateRandomNews();

        return new Response(JSON.stringify(post ?? null), {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    const posts = faker.helpers.multiple(generateRandomNews, {
        count: size,
    });

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'content-type': 'application/json',
        },
    })
}
