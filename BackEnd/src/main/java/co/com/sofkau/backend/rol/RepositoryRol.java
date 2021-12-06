package co.com.sofkau.backend.rol;

import co.com.sofkau.backend.cuenta.ModelCuenta;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryRol extends CrudRepository<ModelRol, Long> {




}
