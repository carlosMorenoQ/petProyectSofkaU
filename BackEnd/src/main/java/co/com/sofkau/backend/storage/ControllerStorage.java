package co.com.sofkau.backend.storage;


import co.com.sofkau.backend.rol.ModelRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ControllerStorage {

    @Autowired
    ServiceStorage serviceStorage;

    @GetMapping(value="/Storages")
    public Iterable<ModelStorage> list(){
        return serviceStorage.listByUsuario();
    }

}
