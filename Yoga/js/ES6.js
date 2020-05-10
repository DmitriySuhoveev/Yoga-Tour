class Option {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    getNewDiv() {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = "What happened";
        newDiv.style.height = this.height;
        newDiv.style.width = this.width;
        newDiv.style.backgroundColor = this.bg;
        newDiv.style.fontSize = this.fontSize;
        newDiv.style.textAlign = this.textAlign;
    }
    
}

