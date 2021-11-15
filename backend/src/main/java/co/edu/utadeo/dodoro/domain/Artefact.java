package co.edu.utadeo.dodoro.domain;

import co.edu.utadeo.dodoro.domain.enums.Origin;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Artefact implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Enumerated(EnumType.STRING)
    private Origin origin;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonIgnore
    private DororoCharacter dororoCharacter;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Origin getOrigin() {
        return origin;
    }

    public void setOrigin(Origin origin) {
        this.origin = origin;
    }

    public DororoCharacter getDororoCharacter() {
        return dororoCharacter;
    }

    public void setDororoCharacter(DororoCharacter dororoCharacter) {
        this.dororoCharacter = dororoCharacter;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Artefact artefact = (Artefact) o;

        return id != null ? id.equals(artefact.id) : artefact.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Artefact{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", origin=" + origin +
                '}';
    }
}
