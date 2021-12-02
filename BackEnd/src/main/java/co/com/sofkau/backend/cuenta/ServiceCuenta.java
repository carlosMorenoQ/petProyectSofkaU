package co.com.sofkau.backend.cuenta;

import co.com.sofkau.backend.dto.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ServiceCuenta {

    @Autowired
    RepositoryCuenta repositoryCuenta;

    public Set<Usuario> list(){
        return StreamSupport
                .stream(repositoryCuenta.findAll().spliterator(), false)
                .map(cuenta -> new Usuario(cuenta.getId(),cuenta.getNombre(),cuenta.getApellido(),
                        cuenta.getEdad(), cuenta.getCorreo(), cuenta.getPassword(), cuenta.getModelRol().getIdRol()))
                .collect(Collectors.toSet());
    }

    public ModelCuenta save(ModelCuenta modelCuenta){
        return repositoryCuenta.save(modelCuenta);
    }

    public void delete(Long id){
        repositoryCuenta.delete(get(id));
    }

    public ModelCuenta get(Long id){
        return repositoryCuenta.findById(id).orElseThrow();
    }

}
