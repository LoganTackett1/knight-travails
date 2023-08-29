class Node {
    constructor () {
        this.location = null;
        this.adjList = [];
    }
    insert (node) {
        this.adjList.push(node);
    }
}

Array.prototype.vectorAdd = function (arr) {
    return [this[0]+arr[0],this[1]+arr[1]];
}

function moveTree (init,end) {
    const moves = [[1,2],[-1,2],[2,1],[2,-1],[1,-2],[-1,2],[-2,1],[-2,-1]];

    const root = new Node();
    root.location = init;
    const discovered = [root];
    let bool = true;
    while (bool) {
        const current = discovered.shift();
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
    return root;
}

function moveArray (root,end,arr = []) {
    if (root.location[0] === end[0] && root.location[1] === end[1]) {
        arr.push(root.location);
        return arr;
    }
    if (root.adjList.length === 0) {
        return false;
    }
    let i = root.adjList.length-1;
    let bool = true;
    while (bool) {
        const curr = moveArray (root.adjList[i],end,arr);
        if (curr === false) {
            i -= 1;
            if (i < 0) {
                return false;
            }
        } else {
            arr.push(root.location);
            return arr;
        }
    }
}

function getMoves (init,end) {
    const root = moveTree(init,end);
    const result = moveArray(root,end);
    result.reverse();
    return result;
}

console.log(getMoves([1,1],[2,2]));
