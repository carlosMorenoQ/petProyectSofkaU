package co.com.sofkau.backend.storage;

import co.com.sofkau.backend.cuenta.ModelCuenta;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryStorage extends CrudRepository<ModelStorage, Long> {

    Iterable<ModelStorage> findAllByModelCuentas(ModelCuenta modelCuenta);

}
