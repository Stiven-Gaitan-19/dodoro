package co.edu.utadeo.dodoro.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Power implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String description;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonIgnore
    private DororoCharacter dororoCharacter;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

        Power power = (Power) o;

        return id != null ? id.equals(power.id) : power.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Power{" +
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }
}
