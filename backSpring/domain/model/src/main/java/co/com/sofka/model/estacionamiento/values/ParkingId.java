package co.com.sofka.model.estacionamiento.values;

import java.util.Objects;

public class ParkingId  {
    private final String parkingId;

    public ParkingId(String parkingId) {
        this.parkingId = parkingId;
    }

    public static ParkingId of(String id){
        return new ParkingId(id);
    }

    public String getParkingId() {
        return parkingId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParkingId parkingId1 = (ParkingId) o;
        return Objects.equals(parkingId, parkingId1.parkingId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(parkingId);
    }
}
