<script lang="ts">
    import type { Member, Group } from '$lib/types';
    import { page } from '$app/stores';
    import toHtml from 'discord-markdown';
    import twemoji from 'twemoji';
    import moment from 'moment';
    import FontAwesome from '../../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
    import FontAwesomeSolid from '../../../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss';
    import { getEmojis, getBirthday, getPronouns, getDescription, getGroups, getAvatar, getColor, getBanner, getName, convertToHTML } from '$lib/functions/strings';

    const { toHTML } = toHtml;

    const returnPath = $page.url.searchParams.get('return') || '/';

    export let member: Member;
    export let groups: Group[];
</script>

<div class="container member">
    <section class="side">
        {#if member.avatar_url}
        <img class="avatar" src={member.avatar_url} alt={`${member.name}'s avatar`}>
        {/if}
        <div class="info">
            {#if getName(member)}
            <h3>{getName(member)}</h3>
            <hr/>
            {/if}
            {#if getEmojis(member)}
            <span><b>Emojis:</b> {@html convertToHTML(getEmojis(member))}</span>
            {/if}
            {#if getBirthday(member)}
            <span><b>Birthday:</b> {convertToHTML(getBirthday(member))}</span>
            {/if}
            {#if getPronouns(member)}
                <span><b>Pronouns:</b> {@html convertToHTML(getPronouns(member))}</span>
            {/if}
        </div>
        <a class="back hidden-mobile hoverable button" href="{returnPath}">
            <i class="fa-solid fa-arrow-left-long"></i>
            <b>Back</b>
        </a>
    </section>
    <div class="content">
    <a class="back hidden-desktop hoverable button" href="{returnPath}">
        <i class="fa-solid fa-arrow-left-long"></i>
        <b>Back</b>
    </a>
    {#if getDescription(member)}
    <main class="desc" style={getBanner(member) && getColor(member) ? `border-left: 4px solid ${getColor(member)}` : ""}>
            <div>
                {@html convertToHTML(getDescription(member))} 
            </div>
    </main>
    {/if}
    {#if getGroups(groups)}
    <main class="desc" style={getBanner(member) && getColor(member) ? `border-left: 4px solid ${getColor(member)}` : ""}>
            <div>
                {@html convertToHTML(getGroups(groups))} 
            </div>
    </main>
    {/if}
    {#if getBanner(member)}
    <div class="banner">
        <img src={getBanner(member)} alt={`${member.name}'s banner`}/>
    </div>
    {:else if getColor(member)}
    <div class="banner small" style={`background-color: ${getColor(member)}`}></div>
    {/if}
    </div>
</div>
