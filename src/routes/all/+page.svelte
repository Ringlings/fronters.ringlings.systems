<script lang="ts">
    import { page } from '$app/stores';

    import LightStyle from '$lib/styles/light.scss';
    import DarkStyle from '$lib/styles/dark.scss';
    import FontAwesome from '../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
    import FontAwesomeSolid from '../../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss';
    import Front from '$lib/components/cards/Front.svelte';
    import { buildNoMemberText, buildAllPageTitle, buildAllEmbedDescription, getAvatar, getColor } from '$lib/functions/strings';

    export let data;
</script>
<style src="lib/styles/_style.scss"></style>

<h2>{buildAllPageTitle()}</h2>
<div class="front container">
    {#if data.members}
    {#each data.members as member}
        <Front {member} returnPath="/all"/>
    {/each}
    {:else}
        <h3>{@html buildNoMemberText()}</h3>
    {/if}
</div>
<span class="tinytext">(Click a card to view member info)</span>
<div class="centered pt-1 pb-1">
    <a class="button hoverable" href="/">
        <i class="fa-solid fa-arrow-left-long"></i>
        <b>Back</b>
    </a>
</div>

<svelte:head>
    <title>{buildAllPageTitle()}</title>
    <meta property="og:type" content="website">
    <meta property="og:title" content={buildAllPageTitle()} />
    <meta property="og:description" content={buildAllEmbedDescription(data.members)} />
    <meta property="og:url" content={$page.url.pathname} />
    <meta property="og:image" content={getAvatar(data.system)} />
    <meta name="theme-color" content={getColor(data.system, true)}>
</svelte:head>