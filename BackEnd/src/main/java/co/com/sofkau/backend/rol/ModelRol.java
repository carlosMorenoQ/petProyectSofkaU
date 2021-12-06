package co.com.sofkau.backend.rol;

import co.com.sofkau.backend.cuenta.ModelCuenta;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "rol")
public class ModelRol {

    @Id
    @Column(name = "id_rol")
    private Long idRol;

    @Column(name = "nombre_rol")
    private String nombreRol;

    /*@JsonManagedReference*/
    @JsonIgnore
    @OneToMany(mappedBy = "modelRol", cascade = CascadeType.ALL)
    private List<ModelCuenta> modelCuentas;

    public ModelRol() {
    }

    public ModelRol(Long idRol) {
        this.idRol = idRol;
    }

    public ModelRol(Long idRol, String nombreRol) {
        this.idRol = idRol;
        this.nombreRol = nombreRol;
    }

    public Long getIdRol() {
        return idRol;
    }

    public void setIdRol(Long idRol) {
        this.idRol = idRol;
    }

    public String getNombreRol() {
        return nombreRol;
    }

    public void setNombreRol(String nombreRol) {
        this.nombreRol = nombreRol;
    }

    public List<ModelCuenta> getModelCuentas() {
        return modelCuentas;
    }

    public void setModelCuentas(List<ModelCuenta> modelCuentas) {
        this.modelCuentas = modelCuentas;
    }
}
