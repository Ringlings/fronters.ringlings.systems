<script lang="ts">
    import LightStyle from '$lib/styles/light.scss';
    import DarkStyle from '$lib/styles/dark.scss';
    import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>
<p>{$page.error && $page.error.message}</p>