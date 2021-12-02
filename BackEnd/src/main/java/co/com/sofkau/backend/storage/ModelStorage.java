package co.com.sofkau.backend.storage;

import co.com.sofkau.backend.cuenta.ModelCuenta;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "storage")
public class ModelStorage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_registro")
    private Long idStorage;

    @Column(name="poke_id")
    private Long pokeId;

//    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="id_cuenta")
    private ModelCuenta modelCuentas;


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

    public ModelCuenta getModelCuentas() {
        return modelCuentas;
    }

    public void setModelCuentas(ModelCuenta modelCuentas) {
        this.modelCuentas = modelCuentas;
    }

}
