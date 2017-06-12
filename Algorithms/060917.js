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
    this.compare = function(list1, list2){
        c1 = list1.head;
        c2 = list2.head;
        while (c1){
            if(c1.val == c2.val){
                c1 = c1.next;
                c2 = c2.next;
            }
            return list1, list2;
        }
        return False;
    }
}

var list1 = new SLL()
list1.insert(3)
list1.insert(3)
list1.insert(3)
list1.insert(3)

var list2 = new SLL()
list2.insert(4)
list2.insert(2)
list2.insert(4)
list2.insert(4)

console.log(list1)
console.log(list2)
console.log(SLL.compare(list1, list2))
