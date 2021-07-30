package co.com.sofka.model.tiquete.values;

import java.util.Objects;

public class TiqueteId {

    private final String tiqueteId;

    public TiqueteId(String tiqueteId) {
        this.tiqueteId = tiqueteId;
    }

    public static TiqueteId of(String id){
        return new TiqueteId(id);
    }

    public String getTiqueteId() {
        return tiqueteId;
    }

}
