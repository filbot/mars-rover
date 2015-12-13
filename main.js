var rover = (function () {

    console.log('rover logic is loaded');

    function moveRover() {
        console.log('rover is moved');
    }

    function centerRover() {
        console.log('rover is centered')
    }

    return {
        moveRover: moveRover,
        centerRover: centerRover
    };

})();