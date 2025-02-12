/**
 * Listens for mouse movement and creates a spark effect at the cursor position.
 * A small visual element (spark) is generated and removed after a short duration.
 *
 * @param {MouseEvent} event - The mouse event containing cursor coordinates.
 */
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