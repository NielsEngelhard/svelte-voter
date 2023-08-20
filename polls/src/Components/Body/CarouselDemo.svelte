<script>
    import Carousel from "svelte-carousel";

    let useCarousel = true;

    let detailContent = {
        images: ["/img/arnold.jpg", "/img/arnold.jpg"]
    }

    const handleClick = () => {
        console.log("click");
    }
</script>

<div class="d-flex justify-content-center">
    <div class="carousel-container d-flex justify-content-center">
        <Carousel
            particlesToShow={1}
            particlesToScroll={1}
            dots={useCarousel}
            arrows={useCarousel}
            swiping={useCarousel}
        >
            {#each detailContent.images as image, i}
                <div>
                    <img src="{image}" />
                </div>
            {/each}
        </Carousel>
    </div>
</div>

<style>
    img {
        max-width: 100px;
    }

    .carousel-container {
        max-width: 200px;
    }
</style>