package co.com.sofkau.backend.dto;

import java.util.List;

public class UsuarioStorage {

    private Integer id;
    private Integer uId;
    private Integer pokeId;

    public UsuarioStorage() {
    }

    public UsuarioStorage(Integer id, Integer uId, Integer pokeId) {
        this.id = id;
        this.uId = uId;
        this.pokeId = pokeId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getuId() {
        return uId;
    }

    public void setuId(Integer uId) {
        this.uId = uId;
    }

    public Integer getPokeId() {
        return pokeId;
    }

    public void setPokeId(Integer pokeId) {
        this.pokeId = pokeId;
    }
}
