<script>
	import Header from './Components/Base/Header.svelte'
	import Footer from './Components/Base/Footer.svelte'
	import Tabs from './Shared/Tabs.svelte'
	import CreatePollForm from './Components/Body/CreatePollForm.svelte'
	import PollList from './Components/Body/PollList.svelte'
    import CarouselDemo from './Components/Body/CarouselDemo.svelte';
    import ImageAnimation from './Components/Body/ImageAnimation.svelte';

	let tabItems = ['Current Polls', 'Add New Poll', 'Carousel', 'Image Animation'];
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
	{:else if activeItem === 'Carousel'}
		<CarouselDemo />
	{:else if activeItem === 'Image Animation'}
		<ImageAnimation />				
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>