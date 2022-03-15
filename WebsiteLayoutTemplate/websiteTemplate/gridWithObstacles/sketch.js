//finding path from top left to bottom right of grid

function removeFromArray(arr, elt) {
    for(var i=arr.length-1; i>=0; i--) {
        if(arr[i] == elt) {
            arr.splice(i, 1);
        }
    }
}
 
function heuristic(a,b) {
    var d = dist(a.i, a.j, b.i, b.j); //euclidian distance
//    var d = abs(a.i-b.i) + abs(a.j-b.j); //manhattan distance
     return d;
}
var cols = 25; 
var rows = 25;
var grid = new Array (cols);

var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;
var path =[];
// var nosolution = false;
//constructor function to create an object
function Spot(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0; //FSCORE
    this.g = 0; //GSCORE
    this.h = 0; //HEURISTIC
    this.neighbors = []; //keep track of the neighbors
    this.previous = undefined;
    //adding obstacles
    this.wall=false; //by default the cell will not be a wall
//take random cells and make it a wall
    if(random(1)<0.3) {
        this.wall = true;
    }
    //show the grid function
    this.show = function(col) {
        fill(col); //the value of the color being used
        //if the cell is a wall, color cell with black
        if(this.wall) {
            fill(0);
        }        
        // stroke(0);
        noStroke();
        rect(this.i*w, this.j*h, w-1, h-1);
    }

    this.addNeighbors = function(grid) {
        var i = this.i;
        var j = this.j;
         //there are 4 neighbors, condition because of edges
        if(i<cols-1) {
            this.neighbors.push(grid[i+1][j]);
        }
        if(i>0) {
            this.neighbors.push(grid[i-1][j]);
        }
        if (j < rows -1) {
            this.neighbors.push(grid[i][j+1]);
        }
       if (j>0) {
        this.neighbors.push(grid[i][j-1]);
       }
       //adding diagonals
       if( i>0 && j>0) {
           this.neighbors.push(grid[i-1][j-1]);
       }
       if(i<cols-1 && j>0) {
           this.neighbors.push(grid[i+1][j-1]);
       }
       if( i > 0 && j < rows -1) {
           this.neighbors.push(grid[i-1][j+1]);
       }
       if( i<cols-1 && j > rows-1 ) {
        this.neighbors.push(grid[i+1][j+1]);
        }
    }
    
}

function setup() {
    createCanvas(400, 400);
    console.log('A*');

    //scaling size of the grid depending on the canvas size, calculate how wide each cell is
    w = width / cols;
    h = height / rows;

    //Making a 2D array
    for (var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j);
        } 
    }

    //loop to add neighbors
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].addNeighbors(grid);
        } 
    }
    //START NODE
    start = grid[0][0];//top left corner
    //END NODE
    end = grid[cols-1][rows -1]; //the bottom right cell corner
    //make sure the start and end cells are never a wall
    start.wall = false;
    end.wall = false;
    openSet.push(start);
    console.log(grid);
}

function draw() {
    if(openSet.length > 0) {
        // we can keep going
        var winner=0; //lowest index
        for(var i=0; i < openSet.length; i++) {
            if(openSet[i].f < openSet[winner].f) {
                winner=i;
            }
        }
        //current is the node in the open set that has the lowest index (fscore)
        var current = openSet[winner]; //it will end here where it is the most optimal path
        if (current == end) {
            //Find the path, evaluates the path at THE END
            //starting with an empty list
            //linking the nodes to backtrack over the path
            // path = [];
            // var temp = current;
            // path.push(temp);
            // while(temp.previous) {
            //     path.push(temp.previous);
            //     temp = temp.previous;
            // }
            noLoop(); //stops the loop
            // console.log("DONE");
            window.alert('Done');
        }
            removeFromArray(openSet, current);
            closedSet.push(current);

            var neighbors = current.neighbors;
            //checking every neighbor
            for(var i=0; i<neighbors.length; i++) {
                var neighbor = neighbors[i];
                //check if neighbor is in the closedSet and it is not a wall
                //if it is a wall it is not a possible spot in the grid
                if(!closedSet.includes(neighbor) && !neighbor.wall) {
                    var tempG = current.g+1;
                    var newPath = false;
                    //if it is in the openSet
                    if(openSet.includes(neighbor)) {
                       if(tempG < neighbor.g){
                           neighbor.g = tempG; //this is the better path
                           newPath = true; // a better path is found
                       } 
                    } else {
                        neighbor.g = tempG;
                        newPath = true;
                        openSet.push(neighbor); //adding to openset to update its value or its not in there
                    }

                        //calculate the heuristic if there is a new path
                        if(newPath) {
                        neighbor.h = heuristic(neighbor, end); //usign raw euclidian distance
                        neighbor.f = neighbor.g + neighbor.h; 
                        // g + h = fscore; how long it took to get here and whats the guess on how long it will take to the end
                        //take note of the parent node in order to trace back and find the optimal path
                        neighbor.previous = current;
                    }

                }//if!closedSet

                
            }


    } else {
        //no solution because the wall might cause the end cell to be unreachable
        window.alert('no solution');
        // console.log('no solution');
        // nosolution = true;
        noLoop(); //end loop here
        return;
       
    }

    background(0);
    //go through the grid and show color for visualizing and debugging
    for(var i = 0; i < cols; i++) {
        for(var j =0; j<rows; j++) {
            grid[i][j].show(color(255));
        }
    }

    //green when open
    for(var i =0; i< openSet.length; i++) {
        openSet[i].show(color(0, 255, 0));
    }

    //red when close
    for(var i =0; i< closedSet.length; i++) {
        closedSet[i].show(color(255, 0, 0 ));
    }

        //evaluate the path every frame 
            //Find the path
            //starting with an empty list
            //linking the nodes to backtrack over the path
            //if there's NO SOLUTION
            // if(!nosolution) {
            path = [];
            var temp = current;
            path.push(temp);
            while(temp.previous) {
                path.push(temp.previous);
                temp = temp.previous;
            }
        // }
    //loop through the path
    for(var i = 0; i<path.length; i++) {
        path[i].show(color(0,0,255)); //path will be color blue
    }

        //visualize the path using a continuous line
        noFill();
        stroke(255);
        beginShape();
            for(var i = 0; i<path.length; i++) {
                vertex(path[i].i*w + w/2, path[i].j*h + h/2);
            }
        endShape();
}

// https://www.youtube.com/watch?v=EaZxUCWAjb0

//GRID with OBSTACLES
//DIAGONALS ADDED