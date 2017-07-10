class StringManipulationTest{
    public static void main(String[] args) {
        StringManipulation iD = new StringManipulation();

        String trimAndConcat = iD.trimAndConcat(" trim  ", " and concatenate");
        System.out.println(trimAndConcat);

        Integer getIndexorNull = iD.getIndexorNull("HelloWorld", 'z');
        System.out.println(getIndexorNull);

        Integer getIndexorNull2 = iD.getIndexorNull2("Hello World", "llo");
        System.out.println(getIndexorNull2);

        String concatSubstring = iD.concatSubstring("Hello World", 1, 4, "Its Me");
        System.out.println(concatSubstring);
    }

}
