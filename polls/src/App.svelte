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

	let polls = [
		{
			id: 2,
			question: "dummy poll 1",
			answerA: "Yeah",
			answerB: "Nah",
			votesA: 8,
			votesB: 2
		},
		{
			id: 1,
			question: "dummy poll 2",
			answerA: "Yes",
			answerB: "No",
			votesA: 9,
			votesB: 20
		}		
	]

	const handleAddNewPoll = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeItem = 'Current Polls';
		console.log(polls);
	};
</script>

<Header />

<main>
	<Tabs activeItem={activeItem} tabItems={tabItems} on:tabChange={tabChanged} />
	{#if activeItem === 'Current Polls'}
		<PollList polls={polls} />
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