document.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
    let spark = document.createElement("div");
    spark.classList.add("cursor");
    document.body.appendChild(spark);
    spark.style.left = `${event.pageX}px`;
    spark.style.top = `${event.pageY}px`;

    setTimeout(function() {
        spark.remove();
    }, 500);
}
