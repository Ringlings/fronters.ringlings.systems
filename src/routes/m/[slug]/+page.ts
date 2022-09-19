import { fetchApi } from '$lib/functions/api';

export const prerender = false;

export async function load( {params, fetch} ) {
    const mid = params.slug;

    let member;
    let groups;

    await Promise.all([
        fetchApi(`https://api.pluralkit.me/v2/members/${mid}`),
        fetchApi(`https://api.pluralkit.me/v2/members/${mid}/groups`, [])
    ]).then((values) => {member = values[0]; groups = values[1]});

    return { member, groups };
}