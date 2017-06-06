function Node (val){
    this.head = val;
    this.next = null;
}
Node.prototype.pass_this = function(custom_return){
    console.log(this, "this");
    console.log(this.self, "self");
    console.log(custom_return, "My Return");
    return custom_return;
}

var SLL = function(){
    this.head = null;
}
SLL.prototype.add = function(val){
    if(!this.head){
        this.head - new Node(val);
        return this;
    }
    var current = this.head;
    while(current.next){
        current = current.next
    }
    current.next = new Node(val);
    return this;
};
SLL.prototype.dequeue = function (callback) {
  var eliminatedNode = this.head;
  this.head = this.head.next;
  eliminatedNode.next = null;
  if (typeof(callback)=='function'){
    callback(eliminatedNode);
  }
  //console.log(this.head); optional
  return this;
};

sList = new SLL();
sList.add(1).add(2).add(3).add(4).head.next.passThis(sList).dequeue(
  function callback(myNode){
    console.log(myNode.val, "CHAINING INSANITY!");
  })
  .dequeue(
    function anotherCallback(myNode){
      console.log("******************************");
      console.log('Seriously, Stop!', myNode);
    });
