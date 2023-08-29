The first algorithm explained (BFS DFS):

I first create a function that makes a graph representing all of the possible chess moves, but I stop
populating the graph once I find the node I am looking for. Because I chose to create this tree in a 
Breadth First fashion (layer by layer) the first instance of the end node must be the one with the shortest
number of moves as it is at the highest depth, thus there is no reason to continue making the graph.

I then create a second function that depth first searches the graph from right to left recursively,
pushing the current root into an array if the end node is found through searching that nodes children.
The right to left is extremely important as by the creation of the tree our end node will always be the
node to the farthest right at the lowest depth. Finding that node will always be faster done right to left
as its the rightmost node at that depth. 

The array produced by the search is our desired array reversed, so I simply combine the two functions into 
one and reverse the array before returning it. 

============================================================================================================

The second algorithm explained (BFS predecesor):

Instead of depth first searching the tree to create the array of shortest moves I instead give every node a 
predecessor key that holds a reference to its parent, that way when I find the end node in the first function 
I can find the shortest path extremely quickly, simply by traversing through each nodes predecesor keys. 
Only slightly increases storage for a big speed increase.