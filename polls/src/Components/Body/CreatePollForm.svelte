<script>
    import CustomButton from "../..//Shared/CustomButton.svelte"
    import { createEventDispatcher } from "svelte";
    import PollStore from '../../Stores/PollStore.js'

    let dispatch = createEventDispatcher();

    let fields = { question: '', answerA: '', answerB: '' }
    let errors = { question: '', answerA: '', answerB: '' }
    let valid = false;

    const submitFormHandler = () => {
        valid = true;

        validateQuestion();
        validateAnswerA();
        validateAnswerB();

        if (valid) {
            let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() }

            PollStore.update(currentPolls => {
                return [poll, ...currentPolls];
            });

            dispatch('addNewPoll');
        }
    };

    const validateQuestion = () => {
        if (fields.question.trim().length < 5) {
            errors.question = "Question must be at least 5 characters long";
        } else {
            errors.question = "";
        }
    };

    const validateAnswerA = () => {
        if (fields.answerA.trim().length < 1) {
            errors.answerA = "Answer A cannot be empty";
        } else {
            errors.answerA = "";
        }
    };  
    
    const validateAnswerB = () => {
        if (fields.answerB.trim().length < 1) {
            errors.answerB = "Answer B cannot be empty";
        } else {
            errors.answerB = "";
        }
    };      
</script>

<form on:submit|preventDefault={submitFormHandler}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question} />
        <div class="error">{ errors.question }</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA} />
        <div class="error">{ errors.answerA }</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB} />
        <div class="error">{ errors.answerB }</div>
    </div>
    
    <CustomButton flat={true} type="secondary">Add Poll</CustomButton>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field {
        margin: 18px auto;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    label {
        margin: 10px auto;
        text-align: left;
    }

    .error {
        color: #d91b42;
        font-size: 12px;
        font-weight: bold;
    }
</style>