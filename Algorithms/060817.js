function Node(val){
    this.val = val;
    this.next = null;
}

function Queue (){
    this.head = null;
    this.tail = null;
    this.enqueue = function(val){
    var node = new Node(val);
    if(!this.head){
        this.head = node;
        this.tail = node;
        return this; // RETURNING 'THIS' WILL ALLOW YOU TO CHAIN METHODS
    }
    this.tail.next = node;
    this.tail = node;
    return this; // RETURNING 'THIS' WILL ALLOW YOU TO CHAIN METHODS
    }
    this.dequeue = function(){
        if(!this.head){
            return False
        }
        else{
            var temp = this.head.val;
            this.head = this.head.next;
            if(this.head.next ==null){
                this.tail = null;
            }
            return temp
        }
    }
}

var myqueue = new Queue();
myqueue.enqueue(2)
myqueue.enqueue(4)
myqueue.dequeue()
console.log(myqueue);
