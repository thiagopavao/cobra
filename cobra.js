tamanho = 600;
escala = 20;




function setup() {
    createCanvas(tamanho,tamanho);
    frameRate(60);
    dirs = {
        'a': createVector(-1,0),
        'w': createVector(0,-1),
        's': createVector(0,1),
        'd': createVector(1,0),
     };
    
    cobrinha = {
        cor: color(255,0,0),
        corpo: [],
        dir: createVector(0,0),
        cria: function() {
            for(i=0;i<4;i++) {
                x= tamanho /2 + i*escala;
                y= tamanho /2;
                q = createVector(x,y);
                this.corpo.push(q);
            }
            this.setDir(dirs['a']);
        },
        desenha: function() {
            fill(this.cor)
            this.anda();
            for(i=0;i<this.corpo.length;i++){
                q = this.corpo[i];
                rect(q.x,q.y,escala,escala);
            }
        },
        anda: function() {
            q= this.corpo[0].copy();
            q.add(this.dir);
            this.corpo.unshift(q);
            
            this.corpo.splice(-1,1);
        },
        setDir : function(d) {
            angulo = degrees(p5.Vector.angleBetween(this.dir,d))
            if (angulo != 180) {
            this.dir = d.copy();
            this.dir.mult(escala);
            }
            }
  };
    
    cobrinha.cria();
}

function draw() {
    background(0);
    cobrinha.desenha();
}

function keyPressed() {
    switch(key.toLowerCase()){
        case 'w':
        case 'a':
        case 's':
        case 'd':
            d = dirs[key.toLowerCase()];
            cobrinha.setDir(d);
            break;
    }
} 
