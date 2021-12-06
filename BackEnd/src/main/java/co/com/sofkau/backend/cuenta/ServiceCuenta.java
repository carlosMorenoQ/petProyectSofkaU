package co.com.sofkau.backend.cuenta;

import co.com.sofkau.backend.dto.Usuario;
import co.com.sofkau.backend.rol.ModelRol;
import co.com.sofkau.backend.rol.ServiceRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ServiceCuenta {

    @Autowired
    RepositoryCuenta repositoryCuenta;

    @Autowired
    ServiceRol serviceRol;

    public Set<Usuario> list(){
        return StreamSupport
                .stream(repositoryCuenta.findAll().spliterator(), false)
                .map(cuenta -> new Usuario(cuenta.getId(),cuenta.getNombre(),cuenta.getApellido(),
                        cuenta.getEdad(), cuenta.getCorreo(), cuenta.getPassword(), cuenta.getModelRol().getIdRol()))
                .collect(Collectors.toSet());
    }

    public Usuario save(ModelCuenta modelCuenta){

        System.out.println("Aqui arranco el servicio");
        List<ModelRol> roles = (List<ModelRol>) serviceRol.list();
        System.out.println(roles.size());

        if(roles.isEmpty()) {

            System.out.println("Detecto lista vacia y va a agregar roles");

            ModelRol rolAdmin = new ModelRol(1L, "admin");
            ModelRol rolDefault = new ModelRol(0L, "default");

            System.out.println("Id default:" + rolDefault.getIdRol());

            serviceRol.save(rolDefault);
            serviceRol.save(rolAdmin);
        }

        System.out.println("Pasamos la validacion");

        ModelCuenta modelCuenta1= repositoryCuenta.save(modelCuenta);
        return new Usuario(modelCuenta1.getId(), modelCuenta1.getNombre(), modelCuenta1.getApellido(),
                modelCuenta1.getEdad(), modelCuenta.getCorreo(), modelCuenta1.getPassword(),modelCuenta1.getModelRol().getIdRol());
    }

    public void delete(Long id){
        repositoryCuenta.delete(get(id));
    }

    public ModelCuenta get(Long id){
        return repositoryCuenta.findById(id).orElseThrow();
    }

}
