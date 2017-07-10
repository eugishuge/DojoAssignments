class SLLTest{
    public static void main(String[] args) {
        SLL iD = new SLL();
        iD.add(5);
        iD.add(4);
        iD.add(3);
        iD.add(2);
        // // this will print the values of all the added functions
        // iD.printValues();

        System.out.println(iD);

        iD.remove();
        // the blow printValues will remove the last Node in the list. 
        iD.printValues();
    }
}
