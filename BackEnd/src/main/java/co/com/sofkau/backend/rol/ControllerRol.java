package co.com.sofkau.backend.rol;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ControllerRol {

    @Autowired
    ServiceRol serviceRol;

    @GetMapping(value="/Roles")
    public Iterable<ModelRol> list(){
        return serviceRol.list();
    }

}
