import { fetchApi, getSystemId } from '$lib/functions/api';

export const prerender = false;

export async function load({ fetch }) {
    let members;
    let system;

    await Promise.all([
        fetchApi(`https://api.pluralkit.me/v2/systems/${getSystemId()}/members`),
        fetchApi(`https://api.pluralkit.me/v2/systems/${getSystemId()}`, [])
    ]).then((values) => {members = values[0].sort((a, b) => a.created.localeCompare(b.created)); system = values[1]});

    return { members, system };
}