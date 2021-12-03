package co.com.sofkau.backend.dto;

import java.util.List;

public class UsuarioStorage {

    private Long usuarioId;
    private Long[] pokeId;

    public UsuarioStorage(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long[] getPokeId() {
        return pokeId;
    }

    public void setPokeId(Long[] pokeId) {
        this.pokeId = pokeId;
    }
}
