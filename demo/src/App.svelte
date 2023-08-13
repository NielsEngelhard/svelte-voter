<script>
	import Modal from './Modal.svelte';
	import FizzBuzz from './FizzBuzz.svelte';
	import AddPersonForm from './AddPersonForm.svelte'

	let name = "Femke";
	let beltColor = "black";

	let displayModal = false;

	$: nameAndBeltColor = `${name} ${beltColor}`;

	const handleClick = () => {
		beltColor = "orange";
	};

	const handleInput =(e) => {
		beltColor = e.target.value
	};

	let people = [
		{ name: "Niels", beltColor: "Black", Age: "23", id: 1 },
		{ name: "Christiaan", beltColor: "Brown", Age: "24", id: 2 },
		{ name: "Ar(jan)", beltColor: "Blue", Age: "23", id: 3 }
	];

	const handleDeletePersonButtonClick = (idToDelete) => {
		console.log(`delete person with id ${idToDelete}`);
		people = people.filter((person) => person.id != idToDelete);
	};

	let number = 5;

	const toggleShowModal = () => {
		console.log("toggle " + displayModal);
		displayModal = !displayModal;
	};

	const addPerson = (e) => {
		const person = e.detail;
		people = [person, ...people];
		showModal = false;
	};
</script>

<Modal message="Nice little modal" showModal={displayModal} on:closeModal={toggleShowModal}>
	<h4 slot="title">Add Person</h4>
	<AddPersonForm on:addPerson={addPerson} />
</Modal>

<main>
	<h1>Hello {name}!</h1>
	<hr />
	<h2>Variables and variable binding</h2>	
	<p>{beltColor} belt</p>
	<button on:click={handleClick}>change belt color</button>
	<input on:input={handleInput} bind:value={beltColor} />

	<p>COMBINED: {nameAndBeltColor}</p>
	
	<hr />
	<h2>Modal</h2>
	<button on:click={toggleShowModal}>Add Person</button>

	<hr />
	<h2>For loop</h2>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			<p>{person.Age} years old</p>
			<p>{person.beltColor} belt</p>
			{#if person.beltColor.toLowerCase() === 'black'}
				<p><b>MASTER NINJA</b></p>
			{/if}
			<button on:click={() => handleDeletePersonButtonClick(person.id)}>delete</button>
		</div>
		{:else}
			<p>There are no people to show...</p>
	{/each}
	<hr />
	<h2>Conditionals</h2>
		<input bind:value={number} />

	{#if number > 20}
	<p>number is greater than 20</p>
	{:else if number > 5}
		<p>number is greater than 5</p>
	{:else}
		<p>number is smaller than 5</p>
	{/if}
	<hr />
	<h2>FizzBuzzComponent</h2>
	<FizzBuzz />
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>