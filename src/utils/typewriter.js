class Typewriter {
    constructor(element, options) {
      this.element = element;
      this.strings = options.strings;
      this.loop = options.loop !== undefined ? options.loop : true;
      this.typeSpeed = options.typeSpeed || 100;
      this.deleteSpeed = options.deleteSpeed || 50;
      this.delayBetweenStrings = options.delayBetweenStrings || 2000;
      this.currentStringIndex = 0;
      this.isDeleting = false;
  
      this.type();
    }
  
    type() {
      const currentString = this.strings[this.currentStringIndex];
      const currentText = this.element.innerText;
  
      if (this.isDeleting) {
        this.element.innerText = currentString.substring(0, currentText.length - 1);
  
        if (currentText.length === 0) {
          this.isDeleting = false;
          this.currentStringIndex = this.loop ?
            (this.currentStringIndex + 1) % this.strings.length :
            Math.min(this.currentStringIndex + 1, this.strings.length - 1);
  
          setTimeout(() => this.type(), this.delayBetweenStrings);
          return;
        }
      } else {
        this.element.innerText = currentString.substring(0, currentText.length + 1);
  
        if (currentText.length === currentString.length) {
          if (this.currentStringIndex === this.strings.length - 1 && !this.loop) {
            return;
          }
  
          this.isDeleting = true;
          setTimeout(() => this.type(), this.delayBetweenStrings);
          return;
        }
      }
  
      setTimeout(
        () => this.type(),
        this.isDeleting ? this.deleteSpeed : this.typeSpeed
      );
    }
  }
  