class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
        constructor(){
          this.root = null
        }


    //function for insertion operation
    insert(value){
          var newNode = new Node(value);
          if(this.root === null){
              this.root = newNode;
              return this;
          }
          //console.log(this.root)
          let currentNode = this.root;
          while(currentNode){
              if(value < currentNode.value){
                  if(currentNode.left === null){
                      currentNode.left = newNode;
                      return this;
                  }
                  currentNode = currentNode.left;
              } else {
                  if(currentNode.right === null){
                      currentNode.right = newNode;
                      return this;
                  } 
                  currentNode = currentNode.right;
              }
          }
      }


      //PreOrder Tree Traversal
       preOrder(currNode){
           if(currNode !==null){
               //console.log(currNode.value);
               //console.log(currNode)
               
               this.preOrder(currNode.left);
               this.preOrder(currNode.right);
           }else{
               return ;
           }
        }

    mergeBtoA(curNode){
        if(curNode !==null){
            //console.log(curNode.value);
            //console.log(currNode) 
            a.insert(curNode.value);
            this.mergeBtoA(curNode.left);
            this.mergeBtoA(curNode.right);
        }else{
            return ;
        }
       
        
 }
  }
  let b = new BinarySeachTree();
  b.insert(14);
  b.insert(13);
  b.insert(16);
  b.insert(15);
  b.insert(17);
  b.insert(18);


  let a = new BinarySeachTree();
  a.insert(10);
  a.insert(3);
  a.insert(2);
  a.insert(6);
  a.insert(5);
  a.insert(9);
  a.insert(8);
  a.insert(7)
  a.insert(1);
  
  //console.log(a.insert(8));
  a.mergeBtoA(b.root);

  a.preOrder(a.root);
  console.log(a)
//structure

    //             9
    //         /      \
    //        7       13
    //      /  \      /   \
    //     6     8    10   15
    //    /             \
    //   4              12
    //  /              /
    // 1             11


    //output
    // 9 7 6 4 1 8 13 10 12 11 15


