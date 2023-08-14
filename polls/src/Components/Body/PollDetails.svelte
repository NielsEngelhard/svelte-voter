<script>
    import Card from "../../Shared/Card.svelte"
    import PollStore from '../../Stores/PollStore'
    import CustomButton from '../../Shared/CustomButton.svelte'
    import { tweened } from 'svelte/motion';

    export let poll;

    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
    $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

    // tweened percentages (smooth animation)
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);
    //$: console.log($tweenedA, $tweenedB);

    const handleVote = (id, option) => {
        PollStore.update(currentPolls => {
            let copiedPolls = [...currentPolls];
            let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

            if (option === 'a') {
                upvotedPoll.votesA++;
            }

            if (option === 'b') {
                upvotedPoll.votesB++;
            }

            return copiedPolls;
        });
    };

    const handleDeleteClicked = (id) => {
        PollStore.update(currentPolls => {
            return currentPolls.filter(poll => poll.id != id);
        });
    };
</script>

<Card>
    <div class="poll">
        <h3>{ poll.question }</h3>
        <p>Total votes: { totalVotes }</p>
        <div class="answer disable-text-select" on:click={() => handleVote(poll.id, 'a')}>
            <div class="percent percent-a" style="width: {$tweenedA}%"></div>
            <span>{ poll.answerA } ({ poll.votesA })</span>
        </div>
        <div class="answer disable-text-select" on:click={() => handleVote(poll.id, 'b')}>
            <div class="percent percent-b" style="width: {$tweenedB}%"></div>
            <span>{ poll.answerB } ({ poll.votesB })</span>
        </div>
        <div class="delete">
            <CustomButton flat={true} on:click={() => handleDeleteClicked(poll.id)}>Delete</CustomButton>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }

    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }

    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px;
        position: relative;      
    }

    .answer:hover {
        opacity: 0.6;
    }

    span {
        display: inline-block;
        padding: 10px 20px;
    }

    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }

    .percent-a {
        background: rgba(217, 27, 66, 0.2);
        border-left: 4px solid #d91b42;
    }

    .percent-b {
        background: rgba(69, 196, 150, 0.2);
        border-left: 4px solid #45c496;
    }

    .delete {
        margin-top: 30px;
        text-align: center;
    }
</style>