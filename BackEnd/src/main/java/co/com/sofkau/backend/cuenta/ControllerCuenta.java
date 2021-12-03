package co.com.sofkau.backend.cuenta;

import co.com.sofkau.backend.dto.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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

    @PostMapping(value="/Usuario")
        public Usuario save(@RequestBody ModelCuenta modelCuenta){
        return serviceCuenta.save(modelCuenta);
    }

    @PutMapping(value = "/Usuario")
    public Usuario update(@RequestBody ModelCuenta modelCuenta){
        if(modelCuenta.getId() != null){
            return serviceCuenta.save(modelCuenta);
        }
        throw new RuntimeException("No existe la cuenta a actualizar");
    }

    @DeleteMapping(value = "/Usuario/Delete/{id}")
    public void delete(@PathVariable("id")Long id){
        serviceCuenta.delete(id);
    }

}
