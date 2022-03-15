// heuristic function using euclidean distance
function heuristic(p1, p2) {
    let D = 0;
    let dx = Math.abs(p1.row - p2.row);
    let dy = Math.abs(p1.col - p2.col);
    return dx + dy; //Math.sqrt(dx * dx + dy * dy);
}

//function to remove from openSet array explored node.
function removeFromArray(arr, elt) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === elt) {
            arr.splice(i, 1);
        }
    }
}

function neighbourNotInUnvisitedNodes(neighbour, unvisitedNodes) {
    for (let node of unvisitedNodes) {
        if (node.row === neighbour.row && node.col === neighbour.col) {
            return false;
        }
    }
    return true;
}

const updateUnvisitedNeighbors = (
    currentNode,
    endNode,
    grid,
    openSet,
    closedSet,
) => {
    let neighbors = getNeighbors(grid, currentNode);
    for (let neighbor of neighbors) {
        // if (!closedSet.includes(neighbor)) {
        //     let tempG = currentNode.distance + 1;
        //     let newPath = false;
        //     //if its in the openSet
        //     if (!openSet.includes(neighbor)) {
        //         if (tempG < neighbor.distance) {
        //             neighbor.distance = tempG;
        //             newPath = true;
        //         }
        //         openSet.push(neighbor);
        //     } else {
        //         neighbor.distance = tempG;
        //         newPath = true;
        //         openSet.push(neighbor);
        //     }
        //     // calculate newPath
        //     if (newPath) {
        //         neighbor.heuristic = heuristic(neighbor, endNode);
        //         neighbor.totalDistance =
        //             neighbor.totalDistance + neighbor.heuristic;
        //         neighbor.previousNode = currentNode;
        //     }
        // } // if !closeSet
        let distance = currentNode.distance + 1;
        if (neighbourNotInUnvisitedNodes(neighbor, openSet)) {
            openSet.unshift(neighbor);
            neighbor.distance = distance;
            neighbor.totalDistance = distance + heuristic(neighbor, endNode);
            neighbor.previousNode = currentNode;
        } else if (distance < neighbor.distance) {
            neighbor.distance = distance;
            neighbor.totalDistance = distance + heuristic(neighbor, endNode);
            neighbor.previousNode = currentNode;
        }
    }
};

//neighbors of currentNode
function getNeighbors(grid, node, diagonals = true) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    if (diagonals) {
        // Southwest
        if (grid[row - 1] && grid[row - 1][col - 1]) {
            neighbors.push(grid[row - 1][col - 1]);
        }
        // Southeast
        if (grid[row + 1] && grid[row + 1][col - 1]) {
            neighbors.push(grid[row + 1][col - 1]);
        }
        // Northwest
        if (grid[row - 1] && grid[row - 1][col + 1]) {
            neighbors.push(grid[row - 1][col + 1]);
        }
        // Northeast
        if (grid[row + 1] && grid[row + 1][col + 1]) {
            neighbors.push(grid[row + 1][col + 1]);
        }
    }
    return neighbors.filter((neighbor) => !neighbor.isVisited);
}

const getCurrentNode = (openSet) => {
    let closest;
    let index;

    for (let i = 0; i < openSet.length; i++) {
        if (!closest || closest.totalDistance > openSet[i].totalDistance) {
            closest = openSet[i];
            index = i;
        } else if (closest.totalDistance === openSet[i].totalDistance) {
            if (closest.heuristic > openSet[i].heuristic) {
                closest = openSet[i];
                index = i;
            }
        }
    }

    openSet.splice(index, 1);
    return closest;
};

const sortByTotalDistance = (openSet) => {
    openSet.sort((nodeA, nodeB) => nodeA.totalDistance - nodeB.totalDistance);
};

export const astar = (grid, startNode, endNode) => {
    let openSet = []; //nodes to be explored
    let closedSet = []; //nodes already explored
    startNode.distance = 0;
    startNode.heuristic = 0;
    startNode.totalDistance = 0;

    //loop through grid to give each cell fscore, gscore and hscore
    // for (let x = 0; x < grid.length; x++) {
    //     for (let y = 0; y < grid[x].length; y++) {
    //         grid[x][y].f = 0; //fscore
    //         grid[x][y].g = 0; //gscore: shortest distance from start to current node
    //         grid[x][y].h = 0; //heuristic value the lower the better
    //         grid[x][y].parent = null;
    //         grid[x][y].previous = undefined;
    //         grid[x][y].wall = false;
    //     }
    // }
    // if (grid[x][y].wall === true) {
    //     grid[x][y].wall = true;
    // }

    //put starting node in openSet to start exploring
    //explore nodes in openSet

    openSet.push(startNode);
    while (openSet.length > 0) {
        sortByTotalDistance(openSet);
        let currentNode = openSet.shift();
        //if the currentNode is the endNode then show the path
        if (currentNode.isWall) continue;
        if (currentNode.distance === Infinity) return closedSet;
        if (currentNode === endNode) {
            // showPath(currentNode);
            // console.log("done");
            return closedSet;
        }

        // if the currentNode is not the endNode remove from openSet
        // then put in closedSet
        currentNode.isVisited = true;
        closedSet.push(currentNode);

        // update the neighbors
        updateUnvisitedNeighbors(
            currentNode,
            endNode,
            grid,
            openSet,
            closedSet,
        );
    } //if openSet
    // else {
    //     console.log("no solution");
    // }
    return closedSet;
};

export const getNodesInShortestPathOrderAStar = (finishNode) => {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }

    return nodesInShortestPathOrder;
};
