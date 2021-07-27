package co.com.sofka.model.estacionamiento.values;

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

    @Override
    public boolean equals(Object o) {

        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TiqueteId tiqueteId1 = (TiqueteId) o;
        return Objects.equals(tiqueteId, tiqueteId1.tiqueteId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tiqueteId);
    }
}
