import java.util.HashMap;

class Hashmatique {
    public void KeyValue(){
        HashMap<String, String> myHash = new HashMap<>();

        myHash.put("Sweet Child O Mine", "Lynard Skinnard");
        myHash.put("Sittin on the Dock of the Bay", "Otis Redding");
        myHash.put("Big Pimpin", "JayZ");

        String getone = myHash.get("Big Pimpin");
        System.out.println(getone);

        // for (int i = 0; i < myHash.length; i++){
        //
        // }
    }

}
