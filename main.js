(function () {

    var rover = {
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            // Rover
            this.roverElement = document.getElementById('rover');

            // Rover dimensions
            this.roverWidth = this.roverElement.offsetWidth;
            this.roverHeight = this.roverElement.offsetHeight,

            // Controls
            this.centerBtn = document.getElementById('center-btn');
            this.leftBtn = document.getElementById('left-btn');
            this.rightBtn = document.getElementById('right-btn');
            this.upBtn = document.getElementById('up-btn');
            this.downBtn = document.getElementById('down-btn');
        },
        bindEvents: function() {
            // Buttons
            this.centerBtn.addEventListener("click", this.centerRover.bind(this));
            this.leftBtn.addEventListener("click", this.moveRover.bind(this));
            this.rightBtn.addEventListener("click", this.moveRover.bind(this));
            this.upBtn.addEventListener("click", this.moveRover.bind(this));
            this.downBtn.addEventListener("click", this.moveRover.bind(this));
        },
        render: function() {
            this.centerRover();
        },
        displayMessage: function() {
            alert('NASA: Mars Rover will not respond to keybaord commands');
        },
        centerRover: function() {
          var viewportWidth = document.documentElement.clientWidth,
              viewportHeight = document.documentElement.clientHeight;

          this.roverElement.style.left = (viewportWidth - this.roverWidth)/2 + 'px';
          this.roverElement.style.top = (viewportHeight - this.roverHeight)/2 + window.pageYOffset + 'px';
          this.roverElement.style.width = this.roverWidth + 'px';
          this.roverElement.style.height = this.roverHeight + 'px';
        },
        moveRover: function(event) {
            var currentLeft = parseInt(this.roverElement.style.left),
                currentTop = parseInt(this.roverElement.style.top),
                currentWidth = parseInt(this.roverElement.style.width),
                currentHeight = parseInt(this.roverElement.style.height);

            switch (event.target.id) {
                case "left-btn":
                    this.roverElement.style.left = (currentLeft - 50) + 'px';
                    break;
                case "right-btn":
                    this.roverElement.style.left = (currentLeft + 50) + 'px';
                    break;
                case "up-btn":
                    this.roverElement.style.top = (currentTop - 50) + 'px';
                    this.roverElement.style.width = (currentWidth - 60) + 'px';
                    this.roverElement.style.height = (currentHeight - 60) + 'px';
                    this.roverElement.style.left = (currentLeft + 30) + 'px';
                    break;
                case "down-btn":
                    this.roverElement.style.top = (currentTop + 50) + 'px';
                    this.roverElement.style.width = (currentWidth + 60) + 'px';
                    this.roverElement.style.height = (currentHeight + 60) + 'px';
                    this.roverElement.style.left = (currentLeft - 30) + 'px';
                    break;
                case "center-btn":
                    this.centerRover();
                    break;
                default:
                    console.log('error moving rover!');
                    break;
            }
        }
    };

    rover.init();

    // Keyboard
    window.onkeyup = function(e) {
       var key = e.keyCode ? e.keyCode : e.which;

       if (key === 38) {
         rover.displayMessage();
       } else if (key == 40) {
           rover.displayMessage();
       } else if (key == 37) {
           rover.displayMessage();
       } else if (key == 39) {
           rover.displayMessage();
       } else if (key == 32) {
           rover.displayMessage();
       } else {
         console.log('error moving rover!');
       }
    }

})();
