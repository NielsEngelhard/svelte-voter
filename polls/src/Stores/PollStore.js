import { writable } from 'svelte/store'

const PollStore = writable([
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
]);

export default PollStore;