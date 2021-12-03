package co.com.sofkau.backend.rol;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceRol {

    @Autowired
    RepositoryRol repositoryRol;

    public Iterable<ModelRol> list(){
        return repositoryRol.findAll();
    }

    public ModelRol save(ModelRol modelRol){
        return repositoryRol.save(modelRol);
    }

    public void delete(Long id){
        repositoryRol.delete(get(id));
    }

    public ModelRol get(Long id){
        return repositoryRol.findById(id).orElseThrow();
    }

}
