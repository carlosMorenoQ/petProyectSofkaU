package co.com.sofkau.backend.storage;


import co.com.sofkau.backend.cuenta.ModelCuenta;
import co.com.sofkau.backend.dto.Usuario;
import co.com.sofkau.backend.dto.UsuarioStorage;
import co.com.sofkau.backend.rol.ModelRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ControllerStorage {

    @Autowired
    ServiceStorage serviceStorage;

    @GetMapping(value="/Storage/{idUsuario}")
    public UsuarioStorage list(@PathVariable("idUsuario")Long idUsuario){
        return serviceStorage.listByUsuario(idUsuario);
    }

    @PostMapping(value="/Storage/savePokemon")
    public UsuarioStorage save(@RequestBody ModelStorage modelStorage){
        return serviceStorage.save(modelStorage);
    }

    @DeleteMapping(value = "/Storage/Delete/{idPokemon}/{idUsuario}")
    public void delete(@PathVariable("idPokemon")Long idPokemon, @PathVariable("idUsuario")Long idUsuario){
        serviceStorage.delete(idPokemon, idUsuario);
    }


}
