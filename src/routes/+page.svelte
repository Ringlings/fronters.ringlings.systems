<script lang="ts">
    import { onMount } from 'svelte';

    import LightStyle from '$lib/styles/light.scss';
    import DarkStyle from '$lib/styles/dark.scss';
    import FontAwesome from '../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
    import FontAwesomeSolid from '../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss';
    import Front from '$lib/components/cards/Front.svelte';
    import { buildSwitchOutText, buildFrontPageTitle, buildFrontEmbedDescription, buildFrontEmbedTitle, getAvatar, getColor } from '$lib/functions/strings';

    export let data;

    let url = "";
    onMount(() => url = window.location.href);
</script>
<style src="lib/styles/_style.scss"></style>

<h2>{buildFrontPageTitle(data.members)}</h2>
<div class="front container">
    {#if data.members}
    {#each data.members as member}
        <Front {member}/>
    {/each}
    {:else}
        <h3>{@html buildSwitchOutText()}</h3>
    {/if}
</div>
<span class="tinytext">(Click a card to view member info)</span>
<div class="centered pt-1">
    <a class="button hoverable" href="/all">
        <i class="fa-solid fa-users"></i>
        <b>See all members</b>
    </a>
</div>

<svelte:head>
    <title>{buildFrontPageTitle(data.members)}</title>
    <meta property="og:type" content="website">
    <meta property="og:title" content={buildFrontEmbedTitle(data.members)} />
    <meta property="og:description" content={buildFrontEmbedDescription(data.members)} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={data.members && data.members.length > 0 ? getAvatar(data.members[0]) : ""} />
    <meta name="theme-color" content={data.members && data.members.length > 0 ? getColor(data.members[0], true) : ""}>
</svelte:head>