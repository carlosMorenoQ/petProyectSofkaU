package co.com.sofkau.backend.cuenta;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositoryCuenta extends CrudRepository<ModelCuenta, Long> {

}
