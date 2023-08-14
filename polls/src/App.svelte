<script>
	import Header from './Components/Base/Header.svelte'
	import Footer from './Components/Base/Footer.svelte'
	import Tabs from './Shared/Tabs.svelte'
	import CreatePollForm from './Components/Body/CreatePollForm.svelte'
	import PollList from './Components/Body/PollList.svelte'

	let tabItems = ['Current Polls', 'Add New Poll'];
	let activeItem = tabItems[0];

	const tabChanged = (e) => {
		activeItem = e.detail;
	};

	const handleAddNewPoll = (e) => {
		activeItem = 'Current Polls';
	};
</script>

<Header />

<main>
	<Tabs activeItem={activeItem} tabItems={tabItems} on:tabChange={tabChanged} />
	{#if activeItem === 'Current Polls'}
		<PollList />
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:addNewPoll={handleAddNewPoll} />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>