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

    this.RemoveNeg = function(list1){
        if(!this.head){
            return false
        }
    var pre = this.head;
    var current = this.head.next;

    while( pre.val < 0){
        this.head = current;
        pre = current
        current = current.next
    }
    while(current){
        if (current.val < 0){
            while(current.next.val < 0){
                current = current.next
            }
            pre.next = current.next;
            }
        }
    }
}

var list1 = new SLL()
list1.insert(1)
list1.insert(-8)
list1.insert(6)
list1.insert(8)
list1.insert(-2)
list1.insert(7)

console.log(list1.head)
console.log(list1.RemoveNeg(list1))
