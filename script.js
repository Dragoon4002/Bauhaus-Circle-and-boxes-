function setup(){
    createCanvas(700, 500);
    background(0);

    let palette = [
        color(0),          // black
        color(255),        // white
        color(17, 133, 195),  // bright blue
        color(115, 192, 171), // teal
        color(242, 95, 92),   // coral red
        color(46, 204, 113),  // green
        color(171, 235, 198), // pastel green
        color(255, 189, 89),  // light orange
        color(85, 98, 112), // slate gray
        color(133, 193, 233), // sky blue
        color(143, 120, 89),  // muted brown
        color(249, 132, 74),  // bright orange
        color(241, 196, 15)   // yellow
    ];
    
    

    let w = 25;

    // First loop to draw filled squares
    for (let x = 0; x < width; x += w){
        for(let y = 0; y < height; y += w){
            noStroke();
            fill(random(palette));
            square(x, y, w);
        }
    }
    
    // Second loop to draw stroked arcs
    for (let x = 0; x < width; x += w){
        for(let y = 0; y < height; y += w){
            noFill();
            stroke(random(palette));
            strokeWeight(w / 2);
            strokeCap(SQUARE);

            push();
            translate(x + w / 2, y + w / 2); // Move to the center of each square
            let offset = int(random(4));
            rotate((offset * PI) / 2); // Rotate the arc randomly

            // Corrected arc drawing
            arc(
                -w / 2,
                -w / 2,
                w * 2 -w / 2,
                w * 2 -w / 2,
                0,
                PI /2
            ); // Draws a quarter arc
            pop(); // Restore previous state
        }
    }
}
