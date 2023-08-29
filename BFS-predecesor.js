class Node {
    constructor () {
        this.location = null,
        this.adjList = [],
        this.pred = null;
    }
    insert (node) {
        node.pred = this;
        this.adjList.push(node);
    }
}

Array.prototype.vectorAdd = function (arr) {
    return [this[0]+arr[0],this[1]+arr[1]];
}

function getMoves (init,end) {
    const moves = [[1,2],[-1,2],[2,1],[2,-1],[1,-2],[-1,2],[-2,1],[-2,-1]];

    const root = new Node();
    root.location = init;
    const discovered = [root];
    let bool = true;
    let current = null;
    while (bool) {
        current = discovered.shift();
        if (current.location[0] === end[0] && current.location[1] === end[1]) {
            bool = false;
        } else {
            for (let move of moves) {
                const newLoc = current.location.vectorAdd(move);
                if ((Math.abs(2*newLoc[0]-7)>7) || (Math.abs(2*newLoc[1]-7)>7)) {
                    continue;
                } else {
                    const newNode = new Node();
                    newNode.location = newLoc;
                    current.insert(newNode);
                    discovered.push(newNode);
                    if (newLoc[0] === end[0] && newLoc[1] === end[1]) {
                        bool = false;
                        break;
                    }
                }
            }
        }
    }
    const endNode = current.adjList[current.adjList.length-1];
    const result = [];
    let temp = endNode;
    while (temp !== null) {
        result.push(temp.location);
        temp = temp.pred;
    }
    return result.reverse();
}

console.log(getMoves([1,1],[3,3]));