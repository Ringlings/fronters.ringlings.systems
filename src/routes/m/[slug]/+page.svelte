<script lang="ts">
    import { page } from '$app/stores';

    import LightStyle from '$lib/styles/light.scss';
    import DarkStyle from '$lib/styles/dark.scss';
    import type { Member as MemberType, Group } from '$lib/types';
    import Member from '$lib/components/cards/Member.svelte';
    import { buildMemberPageTitle, buildMemberEmbedTitle, buildMemberEmbedDescription, getAvatar, getColor } from '$lib/functions/strings';

    export let data: {member: MemberType, groups: Group[]};
</script>

<Member member={data.member} groups={data.groups} />

<svelte:head>
    <title>{buildMemberPageTitle(data.member)}</title>
    <meta property="og:type" content="website">
    <meta property="og:title" content={buildMemberEmbedTitle(data.member)} />
    <meta property="og:description" content={buildMemberEmbedDescription(data.member)} />
    <meta property="og:url" content={$page.url.pathname} />
    <meta property="og:image" content={getAvatar(data.member)} />
    <meta name="theme-color" content={getColor(data.member, true)}>
</svelte:head>