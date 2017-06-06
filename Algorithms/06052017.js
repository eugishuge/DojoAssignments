function Node(value){
    this.val = value;
    this.next = null;
}
function SLL(){
    this.head = null;

    this.insert = function(val){
        if(!this.head){
            this.head = new Node(val)
            return this.head
         }
    var current = this.head;

    while(current.next){
        current = current.next;
        }
        current.next = new Node(val)
        return this.head
    }

    this.secondtolast = function(list){
        if(!this.head){
            return false
        }

        if(!this.head.next){
            return this.head
        }
        
        var pre = this.head;
        var current = this.head.next;

        while(current.next){
            current = current.next
            pre = pre.next
        }
        return pre.val
    }
}

var list = new SLL()
list.insert(1)
list.insert(4)
list.insert(600)
list.insert(89)
list.insert(10)



console.log (list)
console.log(list.secondtolast(list))
