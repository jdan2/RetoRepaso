package co.com.sofka.model.factura.values;

import java.util.Objects;

public class FacturaId {

    private final String facturaId;

    public FacturaId(String facturaId) {
        this.facturaId = facturaId;
    }

    public static FacturaId of(String id){
        return new FacturaId(id);
    }

    public String getFacturaId() {
        return facturaId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FacturaId facturaId1 = (FacturaId) o;
        return Objects.equals(facturaId, facturaId1.facturaId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(facturaId);
    }
}
