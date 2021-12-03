package co.com.sofkau.backend.cuenta;

import co.com.sofkau.backend.rol.ModelRol;
import co.com.sofkau.backend.storage.ModelStorage;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="cuenta")
public class ModelCuenta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_cuenta")
    private Long id;

    @Column(name="nombre_cuenta")
    private String nombre;

    @Column(name="apellido_cuenta")
    private String apellido;

    @Column(name="edad_cuenta")
    private Long edad;

    @Column(name="correo_cuenta")
    private String correo;

    @Column(name="password_cuenta")
    private String password;

/*    @JsonBackReference*/
    @ManyToOne
    @JoinColumn(name="id_rol")
    private ModelRol modelRol;

    @JsonIgnore
//    @JsonManagedReference
    @OneToMany(mappedBy = "modelCuenta", cascade = CascadeType.ALL,  orphanRemoval = true)
    private List<ModelStorage> modelStorage;

    public ModelCuenta() {
    }

    public ModelCuenta(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Long getEdad() {
        return edad;
    }

    public void setEdad(Long edad) {
        this.edad = edad;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ModelRol getModelRol() {
        return modelRol;
    }

    public void setModelRol(ModelRol modelRol) {
        this.modelRol = modelRol;
    }

    public List<ModelStorage> getModelStorage() {
        return modelStorage;
    }

    public void setModelStorage(List<ModelStorage> modelStorage) {
        this.modelStorage = modelStorage;
    }
}
