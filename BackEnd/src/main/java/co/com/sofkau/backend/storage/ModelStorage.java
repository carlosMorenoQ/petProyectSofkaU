package co.com.sofkau.backend.storage;

import co.com.sofkau.backend.cuenta.ModelCuenta;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "storage")
public class ModelStorage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_registro")
    private Long idStorage;

    @Column(name="poke_id")
    private Long pokeId;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="id_cuenta")
    private ModelCuenta modelCuenta;


    public ModelStorage() {
    }

    public Long getIdStorage() {
        return idStorage;
    }

    public void setIdStorage(Long idStorage) {
        this.idStorage = idStorage;
    }

    public Long getPokeId() {
        return pokeId;
    }

    public void setPokeId(Long pokeId) {
        this.pokeId = pokeId;
    }

    public ModelCuenta getModelCuenta() {
        return modelCuenta;
    }

    public void setModelCuenta(ModelCuenta modelCuentas) {
        this.modelCuenta = modelCuentas;
    }

}
