package co.com.sofka.model.estacionamiento.values;

import java.util.Objects;

public class CeldaId {

    private final String celdaId;

    public CeldaId(String celdaId) {
        this.celdaId = celdaId;
    }

    public static CeldaId of(String id){
        return new CeldaId(id);
    }

    public String getCeldaId() {
        return celdaId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CeldaId celdaId1 = (CeldaId) o;
        return Objects.equals(celdaId, celdaId1.celdaId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(celdaId);
    }
}
