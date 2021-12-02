package co.com.sofkau.backend.storage;

import co.com.sofkau.backend.cuenta.ModelCuenta;
import co.com.sofkau.backend.dto.UsuarioStorage;
import co.com.sofkau.backend.rol.ModelRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ServiceStorage {

    @Autowired
    RepositoryStorage repositoryStorage;

    public Iterable<ModelStorage> list() {
        return repositoryStorage.findAll();
    }

    public Iterable<ModelStorage> listByUsuario() {
        ModelCuenta modelCuenta = new ModelCuenta(2l);
//        return StreamSupport
//                .stream(repositoryStorage.findAllByModelCuentas(modelCuenta).spliterator(),false)
//                .map(modelStorage -> new UsuarioStorage(modelStorage.getIdStorage(),modelStorage.getModelCuentas().getId(),modelStorage.getPokeId()).collect(Collectors.toSet());
        return repositoryStorage.findAllByModelCuentas(modelCuenta);
    }

    public ModelStorage save(ModelStorage modelStorage) {
        return repositoryStorage.save(modelStorage);
    }

    public void delete(Long id) {
        repositoryStorage.delete(get(id));
    }

    public ModelStorage get(Long id) {
        return repositoryStorage.findById(id).orElseThrow();
    }

}
