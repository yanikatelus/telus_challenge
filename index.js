// document.getElementById('click_more').style.width = "0px"

function more(){
    const svg = document.getElementById('exampleModal').attributes;

    if (svg['aria-hidden'].value === "true"){
        document.getElementById('explore_svg').setAttribute("aria-hidden", "false");
        // document.getElementById('explore_svg').style.opacity = 0;
        } else {
        document.getElementById('explore_svg').setAttribute("aria-hidden", "true");
        // document.getElementById('explore_svg').style.opacity = 1;
    }

}