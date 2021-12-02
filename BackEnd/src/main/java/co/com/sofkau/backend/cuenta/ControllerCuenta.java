package co.com.sofkau.backend.cuenta;

import co.com.sofkau.backend.dto.Usuario;
import co.com.sofkau.backend.rol.ModelRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ControllerCuenta {

    @Autowired
    ServiceCuenta serviceCuenta;

    @GetMapping(value="/Usuarios")
    public Map<String,Set<Usuario>> list(){
        Map<String,Set<Usuario>> usuarios = new HashMap<>();
        usuarios.put("usuarios",serviceCuenta.list());
        return usuarios;
    }

    @PostMapping
    public ModelCuenta save(ModelCuenta modelCuenta){
        return serviceCuenta.save(modelCuenta);
    }

}
