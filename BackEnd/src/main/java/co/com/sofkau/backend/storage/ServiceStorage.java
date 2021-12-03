package co.com.sofkau.backend.storage;

import co.com.sofkau.backend.cuenta.ModelCuenta;
import co.com.sofkau.backend.dto.UsuarioStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ServiceStorage {

    @Autowired
    RepositoryStorage repositoryStorage;

    public Iterable<ModelStorage> list() {
        return repositoryStorage.findAll();
    }

    public UsuarioStorage listByUsuario(Long idUsuario) {
        ModelCuenta modelCuenta = new ModelCuenta(idUsuario);
        UsuarioStorage usuarioStorage = new UsuarioStorage(idUsuario);
        Long[] pokeIDs;
        List<Long> colectorPokeIDs = new ArrayList<>();
        for (ModelStorage storage : repositoryStorage.findAllByModelCuenta(modelCuenta)) {
            colectorPokeIDs.add(storage.getPokeId());
        }
        pokeIDs = new Long[colectorPokeIDs.size()];
        pokeIDs = colectorPokeIDs.toArray(pokeIDs);
        usuarioStorage.setPokeId(pokeIDs);
        return usuarioStorage;
    }

    public UsuarioStorage save(ModelStorage modelStorage) {
        repositoryStorage.save(modelStorage);
        return listByUsuario(modelStorage.getModelCuenta().getId());
    }

    public void delete(Long idPokemon, Long idUsuario) {
        ModelCuenta modelCuenta = new ModelCuenta(idUsuario);
        for (ModelStorage storage : repositoryStorage.findAllByModelCuenta(modelCuenta)) {
            if (Objects.equals(storage.getPokeId(), idPokemon)){
                repositoryStorage.delete(get(storage.getIdStorage()));
                break;
            }
        }
    }

    public ModelStorage get(Long id) {
        return repositoryStorage.findById(id).orElseThrow();
    }

}
