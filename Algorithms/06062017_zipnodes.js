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

    this.zip = function(list1, list2){
        var count1 = 0;
        var count2 = 0;
        if (list1.head){
            var current1 = list1.head;
            while(current1.next){
                count++;
                current1 = current1.next;
            }
        // else {
        //     return (list2)
        //     }
        }
        if (list2.head){
            var current2 = list2.head;
            while(current2.next){
                count++;
                current2 = current2.next;
            }
        // else {
        //     return (list1)
        //     }
        }
        if (count1 > count2){
            var current1 = list1.head.next;
            var current2 = list2.head;
            var previous1 = list1.head;
            for (var i = 0; i<count2+1;i++){
                previous1 = current2;
                current2 = current1;
                current1 = current.next;
                previous1 = previous1.next;
            }
        }
        current2.next = current1.next;
    }
    return(list1, list2)
}
var list1 = new SLL()

list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.insert(10);


var list2 = new SLL()
list2.insert(10);
list2.insert(50)
list2.insert(60)

console.log("list1",list1)
console.log("list2",list2)
