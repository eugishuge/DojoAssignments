

//write class (blueprint) for Node
function Node(val){
    this.val = val;
    this.next = null;
}

// wite class (blueprint) for singly linked list
function SLL(){
    this.head = null;
    //inside SLL blueprint add methods
    this.insert = function(val){
        //handle new or empty list
        if(!this.head){ //if this.head == null, do something
            this.head = new Node(val) // pointing the head to a new Node()
            return this.head // once this.head is pointing to the new Node return this.head
        }
        //handle list with stuff in it
        var current = this.head // setting current variable to this.head
        while (current.next){ // while current Node has a next
            current = current.next; // reset the current variable to the next Node
        } // leave the while loop when current has no next
        console.log(current) // prints the last node in the list

        current.next = new Node(val) // set current's next pointer to a newly created node
    }
    return this.head
}

var list1 = new SLL() // call function and create new list
list1.insert(4)
list1.insert(3)
list1.insert(1)
list1.insert(5)

console.log(list1)
