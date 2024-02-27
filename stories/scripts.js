

$(".blob").each(function () {
    //Set Start Postion/Size
    var minSize = 30;
    
    var maxSize = $(window).width() * 0.2;
    var w = Math.floor(Math.random() * maxSize) + minSize;
    var newq = makeNewPosition();
    $(this).css({ top: newq[0], left: newq[1], width: 0, height: 0 });
  
    $(this).animate({ opacity: 1, width: w, height: w }, 400);
    //Start Animation
    animateDiv($(this)[0]);
  });
  
  function makeNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(".cont").height();
    var w = $(".cont").width();
  
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
  
    return [nh, nw];
  }
  
  function animateDiv(element, minSpeed = 35, maxSpeed = 25, minSize = 30, maxSize = 150) {
    var newPos = makeNewPosition();
    var speed = Math.floor(Math.random() * maxSpeed) + minSpeed;
    const x1 = element.offsetTop;
    const y1 = element.offsetLeft;
    var dist = Math.floor(distance(x1, y1, newPos[0], newPos[1]));
    var time = dist * speed;
    var screenWidth = $(window).width() * 0.2;
    let width = Math.floor(Math.random() * screenWidth) + minSize;
    var w = width;
  
    $(element).animate(
      { top: newPos[0], left: newPos[1], width: w, height: w },
      time,
      function () {
        animateDiv(element);
      }
    );
  }
  
  function distance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;
  
    return Math.sqrt(a * a + b * b);
  }
  
  function limitNumberWithinRange(num, min, max){
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, min), max)
  }
  
  class HoverButton {
    constructor(
      el,
      strength = 0.4,
      proximity = 100,
      scale = 1.0,
      circle = false,
      attract = false,
      tilt = false,
      enterDuration = 3,
      easeLeave = 'elastic.out(1.1, 0.4)',
      easeEnter = 'power2.out',
      lift = false,
      unset = false
    ) {
      this.el = el;
      this.strength = strength;
      this.attract = attract;
      this.proximity = proximity;
      this.circle = circle;
      this.scale = scale;
      this.enterDuration = enterDuration;
      this.easeLeave = easeLeave;
      this.easeEnter = easeEnter;
      this.tilt = tilt;
      this.lift = lift;
      this.unset = unset;
        
      this.hover = false;
  
      this.calculatePosition();
      this.attachEventsListener();
    }
  
    attachEventsListener() {
      window.addEventListener("mousemove", (e) => this.onMouseMove(e));
          window.addEventListener("mousemove", (e) => this.calculatePosition(e));
      window.addEventListener("resize", (e) => this.calculatePosition(e));
      window.addEventListener("load", (e) => this.calculatePosition(e));
      window.addEventListener("open", (e) => this.calculatePosition(e));
      window.addEventListener("scroll", (e) => this.calculatePosition(e));//this.onScroll(e);});
      //window.addEventListener("scroll", (e) => this.onScroll(e));
    }
  
    calculatePosition() {
  
      const box = this.el.getBoundingClientRect();
      this.x = box.left + (box.width * 0.5);
      this.y = box.top + (box.height * 0.5);
      this.width = box.width;
      this.height = box.height;
    }
  
    onMouseMove(e) {
      let hover = false;
      let hoverArea = (this.hover ? 0.4 : 0.4);
      let x = e.clientX - this.x;
      let y = e.clientY - this.y;
      let distance = Math.sqrt(x * x + y * y);
  
      var inside = false;
  
      if (this.circle) {
        inside = distance < (this.width/2 * hoverArea)
      } else {
        inside =
          x < this.width / 2 + this.proximity &&
          x > -this.width / 2 - this.proximity &&
          y < this.height / 2 + this.proximity &&
          y > -this.height / 2 - this.proximity;
      }
  
      if (inside) {
        hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
      }
  
      if (!hover && this.hover && this.unset) {
        this.onLeave();
        this.hover = false;
      }
    }
  
    onHover(x, y) {
  
        var transX = 0;
        var transY = 0;
  
        if (this.attract) {
          transX = limitNumberWithinRange((x - this.x) * this.strength, -this.width/2, this.width/2);
          transY = limitNumberWithinRange((y - this.y) * this.strength, -this.height/2, this.height/2);
        } else {
          transX = limitNumberWithinRange(-(x - this.x) * this.strength, -this.width/2, this.width/2);
          transY = limitNumberWithinRange(-(y - this.y) * this.strength, -this.height/2, this.height/2);
        }
  
        gsap.to(this.el,  {
    x: transX,
    y: transY,
    scale: this.scale,
    ease: this.easeEnter,
    duration: this.enterDuration
  });
      if(this.lift){
        this.el.style.zIndex = 10;
      }
  
      
    }
    onLeave() {
      gsap.to(this.el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: this.easeLeave,
        duration: 0.9
      });
  
      this.el.style.zIndex = 0;
    }
  }
  
  var blob = $(".blob");
    blob.each(function() {
        const btn = new HoverButton($(this)[0]);
    });
  