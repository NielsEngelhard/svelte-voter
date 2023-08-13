<script>
    import { each } from "svelte/internal";

    var amountOfNumbersToDisplay = 0;
    
    var fizzNumber = 3;
    var buzzNumber = 5;

    const displayFizzBuzzWord = (number) => {
        let returnString = "";

        if (number % fizzNumber == 0) {
            returnString += "Fizz";
        }

        if (number % buzzNumber == 0) {
            returnString += "Buzz";
        }

        return (returnString === "")
        ? "" + number
        : returnString;
    };
</script>

<div class="fizzbuzz-container">
    <label>amount of numbers</label>
    <input bind:value={amountOfNumbersToDisplay} />

    <label>show FIZZ on</label>
    <input bind:value={fizzNumber} />
    
    <label>show BUZZ on</label>
    <input bind:value={buzzNumber} />    

    {#each {length: amountOfNumbersToDisplay} as _, i}
    <p>{displayFizzBuzzWord(i + 1)}</p>
    {/each}
</div>

<style>

</style>