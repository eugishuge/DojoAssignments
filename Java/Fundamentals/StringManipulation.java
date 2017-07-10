class StringManipulation{
    public String trimAndConcat(String x, String y){
        x = x.trim();
        y = y.trim();
        return(x+y);
    }
    public Integer getIndexorNull(String x, char y){
        if(x.indexOf(y)>0){
            return (x.indexOf(y));
        }
        else{
            return null;
        }
    }
    public Integer getIndexorNull2(String x, String y){
        if(x.indexOf(y) > 0){
            return (x.indexOf(y));
        }
        else{
            return null;
        }
    }
    public String concatSubstring (String x, int y, int z, String a){
        String substring = x.substring(y, z);
        return (substring+a);
    }
}
