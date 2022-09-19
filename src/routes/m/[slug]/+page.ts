import {fetchApi, getSystemId} from '$lib/functions/api';
import {error} from "@sveltejs/kit";

export const prerender = false;

export async function load( {params, fetch} ) {
    const mid = params.slug;

    let member;
    let groups;

    await Promise.all([
        fetchApi(`https://api.pluralkit.me/v2/members/${mid}`),
        fetchApi(`https://api.pluralkit.me/v2/members/${mid}/groups`, [])
    ]).then((values) => {member = values[0]; groups = values[1]});

    // Check the member is in the system
    if (member.system !== getSystemId()) {
        throw error(404, "Member not part of this system.");
    }

    return { member, groups };
}