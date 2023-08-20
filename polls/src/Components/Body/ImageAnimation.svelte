<script>
    function moveImage(event) {
        const spotlightedImage = document.getElementById('spotlighted-image');
        const rectA = spotlightedImage.getBoundingClientRect();
        
        const spotlightedImageCoordinates = {
            x: rectA.left + window.scrollX,
            y: rectA.top + window.scrollY
        };
        console.log("spotlightedImageCoordinates " + spotlightedImageCoordinates.x + " " + spotlightedImageCoordinates.y);

        const clickedImage = event.target;
        const rectB = clickedImage.getBoundingClientRect(); // Get the coordinates of the clicked image
        
        const clickedImageCoordinates = {
            x: rectB.left + window.scrollX,
            y: rectB.top + window.scrollY
        };
        console.log("clickedImageCoordinates " + clickedImageCoordinates.x + " " + clickedImageCoordinates.y);

        moveImageToCoordinates(spotlightedImage, clickedImageCoordinates.x, clickedImageCoordinates.y);
        moveImageToCoordinates(clickedImage, spotlightedImageCoordinates.x, spotlightedImageCoordinates.y);
    }

    function moveImageToCoordinates(e, x, y) {
        e.style.transform = `translate(${x}px, ${y}px)`;
    }
</script>

<div class="image-list">
    <img on:click={moveImage} src="/img/happy-arnold-disguise.jpg" alt="Moveable Image">
    <img on:click={moveImage} src="/img/happy-arnold.jpg" alt="Moveable Image">
</div>

<div class="spotlighted image">
    <img id="spotlighted-image" src="/img/arnold.jpg" alt="Moveable Image">
</div>

<style>
    #spotlighted-image {
        position: absolute;
        transition: transform 0.5s ease-in-out;
    }

    img {
        width: 100px;
        height: 100px;
        transition: transform 0.5s ease-in-out;
    }
</style>
